# Import the Azure module
Import-Module Az

# Define variables
$storageAccountName = "mystorageaccount"
$resourceGroupName = "example-resources"
$location = "West Europe"
$sku = "Standard_LRS"

# Authenticate to Azure (if not already authenticated)
Connect-AzAccount

# Create the resource group if it does not exist
if (-not (Get-AzResourceGroup -Name $resourceGroupName -ErrorAction SilentlyContinue)) {
    New-AzResourceGroup -Name $resourceGroupName -Location $location
}

# Create the storage account
New-AzStorageAccount -ResourceGroupName $resourceGroupName `
                     -Name $storageAccountName `
                     -Location $location `
                     -SkuName $sku `
                     -Kind "StorageV2"

# Output the storage account name
Write-Output "Storage account '$storageAccountName' created in resource group '$resourceGroupName' at location '$location' with SKU '$sku'."