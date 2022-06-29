# This alb places at public subnet and forward traffic internet to frontend subnet
resource "aws_lb" "frontend" {
  name               = "${var.env}-${var.project}-lb-frontend"
  internal           = false
  load_balancer_type = "application"
  security_groups    = [var.sg_http]
  subnets            = tolist(var.subnet_public)
}
resource "aws_lb_target_group" "frontend" {
  name     = "${var.env}-${var.project}-lb-tg-frontend"
  vpc_id   = var.vpc_id
  protocol = var.lb_tg_protocol
  port     = var.lb_tg_port
  lifecycle {
    create_before_destroy = true
    ignore_changes        = [name]
  }
}
resource "aws_lb_listener" "frontend" {
  load_balancer_arn = aws_lb.frontend.arn
  port              = var.lb_listener_port
  protocol          = var.lb_listener_protocol
  default_action {
    type = "redirect"
    redirect {
      port        = "443"
      protocol    = "HTTPS"
      status_code = "HTTP_301"
    }
  }
}
resource "aws_lb_listener" "frontend_https" {
  load_balancer_arn = aws_lb.frontend.arn
  port              = 443
  protocol          = "HTTPS"
  certificate_arn   = "arn:aws:acm:us-west-2:145504712931:certificate/ba16e0c2-ea84-41d5-8359-3553f2f03940"
  default_action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.frontend.arn
  }
}
data "aws_route53_zone" "mydomain" {
  name = "digitalbooking.cf"
}
resource "aws_route53_record" "app_dns" {
  zone_id = data.aws_route53_zone.mydomain.zone_id
  name    = "www.digitalbooking.cf"
  type    = "A"
  alias {
    name                   = aws_lb.frontend.dns_name
    zone_id                = aws_lb.frontend.zone_id
    evaluate_target_health = false
  }

}
resource "aws_route53_record" "app_dns_w" {
  zone_id = data.aws_route53_zone.mydomain.zone_id
  name    = "digitalbooking.cf"
  type    = "A"
  alias {
    name                   = aws_lb.frontend.dns_name
    zone_id                = aws_lb.frontend.zone_id
    evaluate_target_health = false
  }

}
# This alb places at frontend subnet and forward traffic internally to backend subnet
resource "aws_lb" "backend" {
  name               = "${var.env}-${var.project}-elb-backend"
  internal           = false
  load_balancer_type = "application"
  security_groups    = [var.sg_http]
  subnets            = tolist(var.subnet_public)
}
resource "aws_lb_target_group" "backend" {
  name     = "${var.env}-${var.project}-lb-tg-backend"
  vpc_id   = var.vpc_id
  protocol = var.lb_tg_protocol
  port     = var.lb_tg_port
  lifecycle {
    create_before_destroy = true
    ignore_changes        = [name]
  }
}
resource "aws_lb_listener" "backend" {
  load_balancer_arn = aws_lb.backend.arn
  port              = var.lb_listener_port
  protocol          = var.lb_listener_protocol
  default_action {
    type = "redirect"
    redirect {
      port        = "443"
      protocol    = "HTTPS"
      status_code = "HTTP_301"
    }
  }
}
resource "aws_lb_listener" "backend_https" {
  load_balancer_arn = aws_lb.backend.arn
  port              = 443
  protocol          = "HTTPS"
  certificate_arn   = "arn:aws:acm:us-west-2:145504712931:certificate/82bd51b2-2924-4d78-9638-42a764ea5631"
  default_action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.backend.arn
  }
}
data "aws_route53_zone" "backenddomain" {
  name = "digitalbooking.gq"
}

resource "aws_route53_record" "api_dns" {
  zone_id = data.aws_route53_zone.backenddomain.zone_id
  name    = "digitalbooking.gq"
  type    = "A"
  alias {
    name                   = aws_lb.backend.dns_name
    zone_id                = aws_lb.backend.zone_id
    evaluate_target_health = false
  }

}

resource "aws_route53_record" "api_dns_w" {
  zone_id = data.aws_route53_zone.backenddomain.zone_id
  name    = "www.digitalbooking.gq"
  type    = "A"
  alias {
    name                   = aws_lb.backend.dns_name
    zone_id                = aws_lb.backend.zone_id
    evaluate_target_health = false
  }

}


/*
# This alb places at backend subnet and forward traffic internally to database subnet
resource "aws_lb" "database" {
  name               = "${var.env}-${var.project}-lb-database"
  internal           = true
  load_balancer_type = "application"
  security_groups    = [var.sg_http]
  subnets            = tolist(var.subnet_backend)
}
resource "aws_lb_target_group" "database" {
  name     = "${var.env}-${var.project}-lb-tg-database"
  vpc_id   = var.vpc_id
  protocol = var.lb_tg_protocol
  port     = var.lb_tg_port
  lifecycle {
    create_before_destroy = true
    ignore_changes        = [name]
  }
}
resource "aws_lb_listener" "database" {
  load_balancer_arn = aws_lb.database.arn
  port              = var.lb_listener_port
  protocol          = var.lb_listener_protocol
  default_action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.database.arn
  }
}
*/