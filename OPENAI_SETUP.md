# OpenAI API Integration Setup

This guide will help you set up the OpenAI API integration for ChatRank's AI visibility analysis features.

## 1. Get Your OpenAI API Key

1. Go to [OpenAI API Platform](https://platform.openai.com/)
2. Sign up or log in to your account
3. Navigate to **API Keys** section
4. Click **"Create new secret key"**
5. Copy the key (it starts with `sk-...`)
6. **Important**: Store this key securely - you won't be able to see it again!

## 2. Local Development Setup

Create a `.env.local` file in your project root:

```env
# OpenAI API Configuration
OPENAI_API_KEY=sk-your-actual-openai-api-key-here
```

**Note**: Never commit this file to Git! It's already in `.gitignore`.

## 3. Railway Deployment Setup

### Step 1: Deploy to Railway (if not already done)

1. Go to [Railway](https://railway.app/)
2. Connect your GitHub account
3. Create a new project from your GitHub repository
4. Railway will automatically detect it's a Next.js app

### Step 2: Add Environment Variables on Railway

1. In your Railway project dashboard, go to **Variables** tab
2. Click **"+ New Variable"**
3. Add the following:
   - **Name**: `OPENAI_API_KEY`
   - **Value**: `sk-your-actual-openai-api-key-here`
4. Click **"Add"**
5. Railway will automatically redeploy your app with the new environment variable

### Step 3: Verify the Setup

1. Your app will redeploy automatically
2. Visit your deployed app
3. Try to run an analysis - it should now work with real OpenAI API calls

## 4. API Endpoints Available

Your app now has these API endpoints:

- `POST /api/analyze` - Analyze company AI visibility
- `POST /api/content-suggestions` - Generate content suggestions

## 5. Usage in Your Components

Use the provided hooks for easy API integration:

```typescript
import { useAnalysis } from '../hooks/useAnalysis'

function MyComponent() {
  const { loading, error, result, analyzeCompany } = useAnalysis()

  const handleAnalysis = async () => {
    try {
      await analyzeCompany({
        companyName: 'Example Corp',
        industry: 'Technology',
        website: 'https://example.com',
        description: 'A tech company'
      })
    } catch (err) {
      console.error('Analysis failed:', err)
    }
  }

  return (
    <div>
      <button onClick={handleAnalysis} disabled={loading}>
        {loading ? 'Analyzing...' : 'Analyze Company'}
      </button>
      {error && <p>Error: {error}</p>}
      {result && <div>Analysis complete!</div>}
    </div>
  )
}
```

## 6. Cost Considerations

- OpenAI charges per token used
- GPT-4 costs more than GPT-3.5-turbo
- Monitor your usage on the OpenAI dashboard
- Consider implementing rate limiting for production

## 7. Security Best Practices

1. **Never expose your API key in frontend code**
2. **Use server-side API routes only** (which we've implemented)
3. **Monitor API usage** to prevent abuse
4. **Consider implementing authentication** before allowing analysis requests
5. **Set usage limits** on your OpenAI account

## 8. Troubleshooting

### "OpenAI API is not configured" Error
- Check that `OPENAI_API_KEY` environment variable is set
- Verify the API key is correct and starts with `sk-`
- Ensure Railway has redeployed after adding the environment variable

### "Insufficient quota" Error
- Check your OpenAI account billing
- Add payment method if needed
- Check API usage limits

### Analysis takes too long
- GPT-4 can be slower than GPT-3.5
- Consider switching to GPT-3.5-turbo for faster responses
- Implement timeout handling in your frontend

## 9. Next Steps

Once your OpenAI integration is working:

1. Create an analysis page/form for users
2. Display results in a nice dashboard format
3. Add more AI analysis features
4. Implement user authentication to track usage
5. Add export/save functionality for analysis results

Your ChatRank app is now powered by OpenAI and ready for advanced AI visibility analysis! 🚀 