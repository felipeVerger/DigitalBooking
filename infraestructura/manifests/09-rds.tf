module "db" {
  source = "terraform-aws-modules/rds/aws"

  identifier = "proyecto-integrador"

  engine              = "mysql"
  engine_version      = "8.0"
  instance_class      = "db.t2.small"
  allocated_storage   = 20
  snapshot_identifier = "arn:aws:rds:us-west-2:145504712931:snapshot:toprod"


  db_name  = "proyecto_integrador"
  username = "root"
  port     = "3306"
  password = "g10Booking"

  #  create_db_subnet_group = true
  #  subnet_ids             = [module.vpc.database_subnets[0], module.vpc.database_subnets[1]]
  db_subnet_group_name = module.vpc.database_subnet_group_name

  # DB parameter group
  family = "mysql8.0"

  # DB option group
  major_engine_version = "8.0"

  publicly_accessible = true

  vpc_security_group_ids = [aws_security_group.allow_rds.id]

}
