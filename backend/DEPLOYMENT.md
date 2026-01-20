# Backend Deployment Guide

## Quick Deploy (Automated)

Run the deployment script from the backend directory:

```powershell
cd c:\Users\soumi\Desktop\doptor-website\backend
.\deploy-to-vercel.ps1
```

The script will:

- ✅ Check if Vercel CLI is installed
- ✅ Guide you through the deployment process
- ✅ Provide helpful prompts and error messages
- ✅ Show post-deployment checklist

---

## Manual Deployment Steps

### 1. Navigate to Backend Directory

```powershell
cd c:\Users\soumi\Desktop\doptor-website\backend
```

### 2. Remove Root Project Link (if exists)

```powershell
cd ..
Remove-Item -Recurse -Force .vercel -ErrorAction SilentlyContinue
cd backend
```

### 3. Deploy Backend

```powershell
vercel --prod
```

**Important Prompts:**

- ✅ **Set up and deploy**: `yes`
- ✅ **Which scope**: Select `studio-1947's projects`
- ❌ **Link to existing project**: `no` (create NEW project)
- ✅ **Project name**: `doptor-backend` (different from frontend)
- ✅ **Directory**: `./` (current directory)
- ❌ **Override settings**: `no`

### 4. Add Environment Variables

**Option A: Vercel Dashboard**

1. Go to https://vercel.com/dashboard
2. Select `doptor-backend` project
3. Navigate to **Settings** → **Environment Variables**
4. Click **Add New**
5. Add:
   - **Key**: `DATABASE_URL`
   - **Value**: Your Neon PostgreSQL connection string
   - **Environments**: All (Production, Preview, Development)
6. Click **Save**
7. Redeploy: `vercel --prod`

**Option B: Vercel CLI**

```powershell
vercel env add DATABASE_URL
# Paste your database URL when prompted
# Select all environments

# Then redeploy
vercel --prod
```

---

## Troubleshooting

### Error: "Cannot resolve environment variable: DATABASE_URL"

**Solution**: Add the `DATABASE_URL` environment variable in Vercel dashboard or via CLI (see Step 4 above)

### Error: "The provided path does not exist"

**Solution**: Make sure you're deploying from the `backend` directory, not the root

### Error: "Command npm run vercel-build exited with 1"

**Solution**:

1. Check Vercel build logs for specific error
2. Ensure `DATABASE_URL` is set in Vercel
3. Verify Prisma schema is correct

### Error: "Project already linked"

**Solution**:

```powershell
Remove-Item -Recurse -Force .vercel
vercel --prod
```

---

## Verify Deployment

After successful deployment, test your endpoints:

### Health Check

```powershell
curl https://your-backend-url.vercel.app/
```

### Waitlist Endpoint

```powershell
curl -X POST https://your-backend-url.vercel.app/api/waitlist `
  -H "Content-Type: application/json" `
  -d '{\"name\":\"Test User\",\"email\":\"test@example.com\"}'
```

### Stats Endpoint

```powershell
curl https://your-backend-url.vercel.app/api/stats
```

---

## Update Frontend

After backend deployment, update your frontend to use the new backend URL:

1. Open frontend environment file (`.env.local` or similar)
2. Update API base URL:
   ```
   NEXT_PUBLIC_API_URL=https://your-backend-url.vercel.app
   ```
3. Redeploy frontend if needed

---

## Useful Commands

```powershell
# Check deployment status
vercel ls

# View deployment logs
vercel logs

# Remove project link
vercel unlink

# List environment variables
vercel env ls

# Pull environment variables locally
vercel env pull
```
