module "alb" {
  source = "terraform-aws-modules/alb/aws"

  name               = "${local.name}-alb"
  load_balancer_type = "application"
  vpc_id             = module.vpc.vpc_id
  /*Option-1: Give as list with specific subnets or in next line, pass all public subnets 
  subnets = [
    module.vpc.public_subnets[0],

    module.vpc.public_subnets[1]
  ]*/
  subnets         = module.vpc.public_subnets
  security_groups = [module.loadbalancer_sg.security_group_id]


  # Listeners
  # ! HTTP Listener - HTTP to HTTPS Redirect
  http_tcp_listeners = [
    {
      port        = 80
      protocol    = "HTTP"
      action_type = "redirect"
      redirect = {
        port        = "443"
        protocol    = "HTTPS"
        status_code = "HTTP_301"
      }
    }
  ]
  # Target Groups
  target_groups = [
    {
      backend_protocol = "HTTP"
      backend_port     = 80
      target_type      = "instance"
      targets = [{
        target_id = module.ec2_public[0].id
        port      = 80
      }]
      deregistration_delay = 10
      health_check = {
        enabled             = true
        interval            = 30
        path                = "/"
        port                = "traffic-port"
        healthy_threshold   = 3
        unhealthy_threshold = 3
        timeout             = 6
        protocol            = "HTTP"
        matcher             = "200-399"
      }
      protocol_version = "HTTP1"
    },
    {
      backend_protocol = "HTTP"
      backend_port     = 8080
      target_type      = "instance"
      targets = [{
        target_id = module.ec2_private[0].id
        port      = 8080
      }]
      deregistration_delay = 10
      health_check = {
        enabled             = true
        interval            = 30
        path                = "/products"
        port                = "traffic-port"
        healthy_threshold   = 3
        unhealthy_threshold = 3
        timeout             = 6
        protocol            = "HTTP"
        matcher             = "200-399"
      }
      protocol_version = "HTTP1"
    }

  ]

  # ! HTTPS Listener
  https_listeners = [
    {
      port            = 443
      protocol        = "HTTPS"
      certificate_arn = "arn:aws:acm:us-west-2:145504712931:certificate/ba16e0c2-ea84-41d5-8359-3553f2f03940"
      action_type     = "fixed-response"
      fixed_response = {
        content_type = "text/plain"
        message_body = "Fixed Static message - for Root Context"
        status_code  = "200"
      }
    },
  ]
  #!
  # HTTPS Listener Rules
  https_listener_rules = [
    # Rule-1: /app1* should go to App1 EC2 Instances
    {
      https_listener_index = 0
      priority             = 1
      actions = [
        {
          type               = "forward"
          target_group_index = 0
        }
      ]
      conditions = [{
        path_patterns = ["/*"]
      }]
    },
  ]
  tags = local.common_tags # ALB Tags
}




