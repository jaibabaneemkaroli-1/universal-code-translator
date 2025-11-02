export default async function handler(req, res) {
// Enable CORS
res.setHeader('Access-Control-Allow-Origin', '*');
res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

// Handle preflight
if (req.method === 'OPTIONS') {
res.status(200).end();
return;
}

if (req.method !== 'POST') {
res.status(405).json({ error: 'Method not allowed' });
return;
}

try {
const { apiKey, sourceLang, targetLang, code } = req.body;

if (!apiKey || !sourceLang || !targetLang || !code) {
res.status(400).json({ error: 'Missing required fields' });
return;
}

const prompt = `You are a universal code translator using "Cultural Grammar Synthesis" methodology.

Translate this ${sourceLang} code to idiomatic ${targetLang} code.

CRITICAL INSTRUCTIONS:

1. IDENTIFY STRUCTURAL INVARIANTS (what MUST be preserved):
- State management patterns
- Effect handling patterns
- Composition patterns
- Control flow semantics
- Error handling semantics

2. EXTRACT SOURCE GRAMMAR:
- How does ${sourceLang} organize these invariants?
- What paradigm patterns does it use?
- What are the idioms?

3. SYNTHESIZE TARGET GRAMMAR:
- How does ${targetLang} idiomatically express the same invariants?
- What are the native patterns?
- Translate paradigm, not just syntax

4. PRODUCE IDIOMATIC CODE:
- Must feel native to ${targetLang}
- Must preserve all semantic behavior
- Must be genuinely usable

Format your response EXACTLY like this:

✨ TRANSLATED CODE (${targetLang}):

[Complete, idiomatic, working ${targetLang} code here]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🧠 SYNTHESIS POINTS:

✓ [Pattern 1]: ${sourceLang} [approach] → ${targetLang} [approach]
Rationale: [Why this preserves the invariant]

✓ [Pattern 2]: ${sourceLang} [approach] → ${targetLang} [approach]
Rationale: [Why this preserves the invariant]

[Continue for all key transformations]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💡 KEY INSIGHT:

[2-3 sentences explaining what makes this translation work - the core paradigm shift]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⚖️ TRADE-OFFS:

GAINED: [What the target paradigm gives you]
LOST: [What's different/harder]
MITIGATION: [How to address what's lost]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Source code to translate:

\`\`\`${sourceLang}
${code}
\`\`\`

Make the ${targetLang} code genuinely idiomatic and production-quality.`;

const response = await fetch('https://api.anthropic.com/v1/messages', {
method: 'POST',
headers: {
'Content-Type': 'application/json',
'x-api-key': apiKey,
'anthropic-version': '2023-06-01'
},
body: JSON.stringify({
model: 'claude-sonnet-4-20250514',
max_tokens: 8192,
messages: [{
role: 'user',
content: prompt
}]
})
});

if (!response.ok) {
const error = await response.json();
res.status(response.status).json({
error: error.error?.message || 'API request failed'
});
return;
}

const data = await response.json();
res.status(200).json({ translation: data.content[0].text });

} catch (error) {
console.error('Translation error:', error);
res.status(500).json({ error: error.message || 'Internal server error' });
}
}
