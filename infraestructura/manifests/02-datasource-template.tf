data "template_file" "web_tier" {
  template = file("${path.module}/web-install.yml")
}
data "template_file" "app_tier" {
  template = file("${path.module}/app-install.yml")
}