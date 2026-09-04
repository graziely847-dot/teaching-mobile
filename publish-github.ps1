param(
    [string]$GitHubUser = "<SEU_USUARIO>",
    [string]$Branch = "main"
)

if ($GitHubUser -eq "<SEU_USUARIO>") {
    Write-Host "Informe o seu nome de usuario do GitHub:"
    Write-Host "Exemplo: .\publish-github.ps1 -GitHubUser seunome"
    exit 1
}

Write-Host "Inicializando repositorio local..."
git init

git add .
git commit -m "Initial commit"
git branch -M $Branch

git remote remove origin 2>$null

git remote add origin "https://github.com/$GitHubUser/teaching-mobile.git"

Write-Host "Enviando para o GitHub..."
git push -u origin $Branch
