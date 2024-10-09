# Configure the Azure provider
provider "azurerm" {
  features {}
}

# Define variables
variable "storage_account_name" {
  description = "Name of the storage account"
  type        = string
}

variable "location" {
  description = "Location for the storage account"
  type        = string
  default     = "West Europe"
}

variable "sku" {
  description = "The SKU of the storage account"
  type        = string
  default     = "Standard_LRS"
  validation {
    condition     = contains(["Standard_LRS", "Standard_GRS", "Standard_ZRS", "Premium_LRS"], var.sku)
    error_message = "The SKU must be one of Standard_LRS, Standard_GRS, Standard_ZRS, or Premium_LRS."
  }
}

# Define the storage account resource
resource "azurerm_storage_account" "storage" {
  name                     = var.storage_account_name
  resource_group_name      = azurerm_resource_group.rg.name
  location                 = var.location
  account_tier             = "Standard"
  account_replication_type = var.sku
  kind                     = "StorageV2"
}

# Define the resource group (assuming it is needed)
resource "azurerm_resource_group" "rg" {
  name     = "example-resources"
  location = var.location
}

# Output the storage account name
output "storage_account_name" {
  value = azurerm_storage_account.storage.name
}