#⁡⁢⁢⁢#######################################################
#⁡⁢⁢⁢#################      LOCAL VARS      ################⁡
#⁡⁢⁢⁢⁡⁢⁢⁢#######################################################⁡

locals {

  project = "${var.team_number}-${var.camada}-digitalbooking"
  common_tags = {
    Owners = var.team_number
    Camada = var.camada
  }
}



/*
local values do NOT need to go in a separate file. This is only done for educational purposes.

LOCAL VALUES assign a name to an e͟x͟p͟r͟e͟s͟s͟i͟o͟n so it can be used multiple times in the terraform code.
These are comparable to traditional programming languages as they allow you to assign a name to a value.
            
            - INPUT VARIABLES are like function arguments.
            - OUTPUT VALUES are like function return values.
            - LOCAL VALUES are like function's temporary local variables. 

Referred to as "locals", they allow the ussage of complex values in the terraform code (e.g. concat, map, etc).
Local values are created by a L͟O͟C͟A͟L͟S block but they have to be referenced them as attributes on an object named L͟O͟C͟A͟L.
 e.g. 

 locals {
    common_tags = concat(aws_instance.db_instance*.tag, aws_instance.backend_instance*.tag)
    }

    referenced: tags = local.common_tags

 - locals is a top level in terraform


*/


