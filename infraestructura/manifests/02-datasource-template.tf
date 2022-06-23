data "template_file" "web_tier" {
  template = file("web-install.sh")
}
data "template_file" "app_tier" {
  template = file("app-install.sh")
}