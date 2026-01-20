# Vercel Backend Deployment Script
# This script automates the deployment of the backend to Vercel

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Doptor Backend - Vercel Deployment" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Step 1: Check if we're in the backend directory
$currentDir = Get-Location
if ($currentDir.Path -notlike "*\backend") {
    Write-Host "Error: Please run this script from the backend directory" -ForegroundColor Red
    Write-Host "Current directory: $currentDir" -ForegroundColor Yellow
    exit 1
}

Write-Host "[1/4] Checking Vercel CLI installation..." -ForegroundColor Yellow
$vercelInstalled = Get-Command vercel -ErrorAction SilentlyContinue
if (-not $vercelInstalled) {
    Write-Host "Vercel CLI not found. Installing..." -ForegroundColor Yellow
    npm install -g vercel
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Error: Failed to install Vercel CLI" -ForegroundColor Red
        exit 1
    }
    Write-Host "✓ Vercel CLI installed successfully" -ForegroundColor Green
} else {
    Write-Host "✓ Vercel CLI is already installed" -ForegroundColor Green
}
Write-Host ""

# Step 2: Check if .vercel directory exists (already linked)
Write-Host "[2/4] Checking Vercel project link..." -ForegroundColor Yellow
if (Test-Path ".vercel") {
    Write-Host "✓ Project is already linked to Vercel" -ForegroundColor Green
    $relink = Read-Host "Do you want to relink to a different project? (y/N)"
    if ($relink -eq "y" -or $relink -eq "Y") {
        Write-Host "Removing existing Vercel link..." -ForegroundColor Yellow
        Remove-Item -Recurse -Force .vercel
        Write-Host "✓ Removed existing link" -ForegroundColor Green
    }
}
Write-Host ""

# Step 3: Deploy to Vercel
Write-Host "[3/4] Deploying to Vercel..." -ForegroundColor Yellow
Write-Host ""
Write-Host "IMPORTANT: When prompted, please:" -ForegroundColor Cyan
Write-Host "  - Create a NEW project (don't link to existing 'doptor-website')" -ForegroundColor Cyan
Write-Host "  - Name it something like 'doptor-backend'" -ForegroundColor Cyan
Write-Host ""
Write-Host "Starting deployment..." -ForegroundColor Yellow
Write-Host ""

vercel --prod

if ($LASTEXITCODE -ne 0) {
    Write-Host ""
    Write-Host "Deployment failed. Common issues:" -ForegroundColor Red
    Write-Host "  1. Missing DATABASE_URL environment variable" -ForegroundColor Yellow
    Write-Host "  2. Prisma generation failed" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Next steps:" -ForegroundColor Cyan
    Write-Host "  1. Go to your Vercel dashboard" -ForegroundColor White
    Write-Host "  2. Navigate to Settings > Environment Variables" -ForegroundColor White
    Write-Host "  3. Add DATABASE_URL with your Neon connection string" -ForegroundColor White
    Write-Host "  4. Run this script again or run: vercel --prod" -ForegroundColor White
    Write-Host ""
    exit 1
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Write-Host "  Deployment Successful! 🎉" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""

# Step 4: Remind about environment variables
Write-Host "[4/4] Post-deployment checklist:" -ForegroundColor Yellow
Write-Host ""
Write-Host "✓ Deployment completed" -ForegroundColor Green
Write-Host ""
Write-Host "⚠️  IMPORTANT: Ensure environment variables are set:" -ForegroundColor Yellow
Write-Host "  1. Go to: https://vercel.com/dashboard" -ForegroundColor White
Write-Host "  2. Select your backend project" -ForegroundColor White
Write-Host "  3. Go to Settings > Environment Variables" -ForegroundColor White
Write-Host "  4. Add DATABASE_URL (if not already added)" -ForegroundColor White
Write-Host "  5. Redeploy if you just added the variable" -ForegroundColor White
Write-Host ""
Write-Host "To add environment variable via CLI:" -ForegroundColor Cyan
Write-Host "  vercel env add DATABASE_URL" -ForegroundColor White
Write-Host ""
Write-Host "To redeploy:" -ForegroundColor Cyan
Write-Host "  vercel --prod" -ForegroundColor White
Write-Host ""
