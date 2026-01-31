$endpoint = "https://claude-skills-deploy.vercel.com/api/deploy"
$projectPath = "c:\Users\Rusty\Desktop\.agent\portfolio-web"
$tempDir = Join-Path $env:TEMP ([Guid]::NewGuid().ToString())
New-Item -ItemType Directory -Path $tempDir | Out-Null
$tarball = Join-Path $tempDir "project.tgz"

Write-Host "Preparing deployment..."
# Simple framework detection
$framework = "null"
$pkgJson = Join-Path $projectPath "package.json"
if (Test-Path $pkgJson) {
    $content = Get-Content $pkgJson -Raw
    if ($content -match '"next"') { $framework = "nextjs" }
    elseif ($content -match '"vite"') { $framework = "vite" }
}

Write-Host "Creating deployment package..."
# Use tar.exe which is available on Windows 10/11
tar.exe -czf $tarball -C $projectPath --exclude='node_modules' --exclude='.git' .

Write-Host "Deploying to Vercel..."
$response = curl.exe -s -X POST $endpoint -F "file=@$tarball" -F "framework=$framework"

# Cleanup
Remove-Item -Recurse -Force $tempDir

# Return the raw response for parsing
$response
