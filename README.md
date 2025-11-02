```markdown
# 🚀 Universal Code Translator

**Translate code between ANY programming paradigms using Cultural Grammar Synthesis**

## [✨ **LIVE DEMO - TRY IT NOW**](https://jaibabaneemkaroli-1.github.io/universal-code-translator/)

**Fully working translator supporting 132 language pairs. Paste your code, get translations with complete reasoning chains.**

Requires Claude API key (get free $5 credits at [console.anthropic.com](https://console.anthropic.com/))

---

## 🌐 132 Language Pairs

### Source Languages (11)
JavaScript • TypeScript • Python • Java • C++ • C# • Ruby • PHP • Swift • Kotlin • Scala

### Target Languages (12)
Haskell • Rust • Go • Python • TypeScript • OCaml • Elixir • Clojure • F# • Erlang • Zig • Nim

### Translation Examples
- **OOP → Functional** (Java → Haskell)
- **Dynamic → Static** (Python → Rust)
- **Imperative → Declarative** (JavaScript → Elixir)
- **Procedural → Reactive** (C++ → Erlang)
- **ANY paradigm → ANY paradigm**

---

## What Is This?

**Not a syntax converter. Not a transpiler. A paradigm synthesizer.**

This tool uses **Cultural Grammar Synthesis** to translate code by:

1. **Extracting structural invariants** (what MUST be preserved)
2. **Identifying source grammar** (how the source paradigm organizes complexity)
3. **Synthesizing target grammar** (how the target paradigm expresses the same invariants)
4. **Generating idiomatic code** with complete reasoning chains

### The Result

**Input:** JavaScript OOP with mutable state
**Output:** Idiomatic OCaml with functors + Lwt monads
**Plus:** Full explanation of WHY the translation works + trade-off analysis

---

## 🎯 Live Demo

**Visit:** [https://jaibabaneemkaroli-1.github.io/universal-code-translator/](https://jaibabaneemkaroli-1.github.io/universal-code-translator/)

1. Get your Claude API key from [console.anthropic.com](https://console.anthropic.com/) (free $5 credits)
2. Paste your API key
3. Click an example or paste your own code
4. Select source and target languages
5. Click "Translate"
6. Get: Translated code + reasoning chains + synthesis points + trade-offs

---

## Example Translation

### Input (JavaScript):
```javascript
class UserRepository {
constructor(db) {
this.db = db;
this.cache = new Map();
}

async getUser(id) {
if (this.cache.has(id)) {
return this.cache.get(id);
}
const user = await this.db.query('SELECT * FROM users WHERE id = ?', [id]);
this.cache.set(id, user);
return user;
}
}
```

### Output (OCaml):

```ocaml
module UserRepository (DB : DATABASE) : USER_REPOSITORY = struct
type t = {
db : DB.t;
cache : (string, user) Hashtbl.t;
}

let get_user repo id =
match Hashtbl.find_opt repo.cache id with
| Some cached_user -> Lwt.return cached_user
| None ->
let open Lwt.Syntax in
let* result = DB.query repo.db "SELECT * FROM users WHERE id = ?" [id] in
(* ... *)
end
```

**Plus complete reasoning:** How class → functor, async/await → Lwt monad, mutation → Hashtbl, constructor injection → functor parameters

-----

## How It Works

### The Seven Dimensions of Code Grammar

Every programming paradigm organizes complexity across seven dimensions:

1. **State Management** - Mutable vs immutable, owned vs shared
1. **Control Flow** - Imperative vs declarative, sequential vs concurrent
1. **Abstraction** - Objects vs functions vs modules
1. **Error Handling** - Exceptions vs sum types vs panics
1. **Composition** - Inheritance vs traits vs functors
1. **Side Effects** - Untracked vs monadic vs effect systems
1. **Type Discipline** - Dynamic vs static vs dependent

**Cultural Grammar Synthesis** extracts these dimensions from source code and synthesizes them into the target paradigm while preserving semantic invariants.

-----

## Why This Matters

### For Learning

- See your OOP code in functional paradigm with explanations
- Understand monads through familiar imperative code
- Learn new languages by seeing translations of code you already know
- Grasp paradigm differences concretely, not abstractly

### For Migration

- Evaluate language migrations before committing
- See what refactoring would actually look like
- Understand paradigm trade-offs with real examples
- Plan migrations with full knowledge of transformations needed

### For Teaching

- Show paradigm differences with real, working code
- Demonstrate translations in real-time
- Explain “why it works” with complete reasoning chains
- Make abstract concepts concrete and immediate

### For Research

- Proof that paradigm synthesis is possible
- Framework for systematic code translation
- Method extends beyond code to any domain with structure
- Validates Cultural Grammar approach empirically

-----

## Technical Architecture

### Frontend

- Single-page application (HTML + JavaScript)
- Beautiful gradient UI with dual-panel layout
- 6 example code snippets across multiple paradigms
- Responsive design, works on mobile

### Translation Engine

- Claude Sonnet 4.5 via Anthropic API
- CORS proxy for browser compatibility
- Specialized prompts implementing Cultural Grammar Synthesis
- Generates idiomatic code + complete reasoning

### Deployment

- GitHub Pages (static hosting)
- No backend required (CORS proxy handles API calls)
- Instant updates via git push

-----

## The Method: Cultural Grammar Synthesis

This translator demonstrates a **universal method** that works across domains:

- 🎵 **Music** - Synthesizing genres (Gnawa + Gospel + Irish)
- 🏛️ **Architecture** - Synthesizing styles (Japanese + Islamic + Scandinavian)
- 🍽️ **Food** - Synthesizing cuisines (French + Kaiseki + Ethiopian)
- 🚗 **Vehicles** - Synthesizing designs (Cargo bike + Supercar + Kei car)
- 💻 **Code** - Synthesizing paradigms (OOP + Functional + Systems)

**Same principles. Different domains.**

The code translator is **proof** the method works universally.

-----

## What Makes This Different

### Traditional Transpilers

- ❌ Convert syntax mechanically
- ❌ Don’t understand paradigms
- ❌ Produce unidiomatic code
- ❌ No reasoning provided
- ❌ Language-pair specific

### Universal Code Translator

- ✅ Understands deep structure
- ✅ Synthesizes paradigms, not just syntax
- ✅ Generates genuinely idiomatic code
- ✅ Explains every transformation
- ✅ Preserves semantic invariants
- ✅ Documents trade-offs explicitly
- ✅ Works across 132 language pairs
- ✅ Same method for all translations

-----

## Real Use Cases

### Scenario 1: Learning Haskell

“I know JavaScript OOP. How do I think functionally?”

**Solution:** Paste your JS class → Get Haskell with State/Reader/IO monads + explanation of why each pattern translates the way it does.

### Scenario 2: Evaluating Rust Migration

“Should we migrate our Python service to Rust?”

**Solution:** Translate key Python modules → See Rust equivalents → Understand ownership implications → Make informed decision with actual code examples.

### Scenario 3: Teaching Paradigms

“How do I show students the difference between OOP and functional?”

**Solution:** Live demo translating the same problem across paradigms → Students see concrete differences → “Why it works” explanations make concepts clear.

### Scenario 4: Understanding Monads

“What ARE monads? I keep reading about them but don’t get it.”

**Solution:** Translate your async/await code → See it become IO/State monads → Realize monads are just explicit sequencing → Finally understand through familiar patterns.

-----

## Example Synthesis Points

### Mutable State → State Monad

**Source (JS):** `this.cache = new Map(); this.cache.set(key, value);`

**Target (Haskell):** `modify (Map.insert key value)`

**Why it works:** State monad provides stateful computation through pure transformations of immutable data structures, preserving mutation semantics without side effects.

### Async Effects → IO Monad

**Source (JS):** `await this.db.query(...)`

**Target (Haskell):** `liftIO $ queryDB db ...`

**Why it works:** IO monad makes effects explicit in the type system while allowing composition, preserving async semantics with compile-time guarantees.

### Constructor DI → Reader Monad

**Source (JS):** `constructor(db) { this.db = db; }`

**Target (Haskell):** `db <- ask`

**Why it works:** Reader monad provides implicit environment passing, replicating dependency injection functionally with type-level guarantees.

-----

## Supported Patterns

The translator handles:

✅ **Repository patterns** (caching, queries, DI)
✅ **Event systems** (pub/sub, callbacks)
✅ **API clients** (HTTP, retry logic, error handling)
✅ **State machines** (transitions, guards)
✅ **Decorators** (higher-order functions, aspects)
✅ **Builders** (fluent interfaces, validation)
✅ **Observers** (reactive patterns)
✅ **Strategies** (polymorphism, dynamic dispatch)

And many more - the method is general.

-----

## Status & Roadmap

### Current: v1.0 ✅

- 11 source languages
- 12 target languages
- 132 language pairs
- All major paradigms covered
- Full reasoning chains
- Live web interface
- Working translations
- Trade-off analysis

### Planned: v2.0

- Batch translation mode
- API for programmatic access
- VS Code extension
- Grammar visualization tools
- More language pairs
- Type system deep dives
- Performance analysis

-----

## Contributing

Want to improve translations or add features?

1. Fork the repo
1. Test translations extensively
1. Document your reasoning
1. Submit PR with examples

The grammar framework is extensible. The method is sound. Help make it better.

-----

## Technical Details

### Files

- `index.html` - Complete frontend application
- `api/translate.js` - Backend translation logic (for future serverless deployment)
- `vercel.json` - Deployment configuration
- `README.md` - This file

### How Translation Works

1. User submits code + source/target languages
1. Frontend constructs Cultural Grammar Synthesis prompt
1. Request sent to Claude API via CORS proxy
1. Claude analyzes code structure across seven dimensions
1. Generates idiomatic target code with reasoning
1. Results displayed with syntax highlighting

### CORS Proxy

Currently using `corsproxy.io` to enable browser-based API calls. For production deployment, use the included serverless function in `api/translate.js`.

-----

## License

MIT License - Free to use, modify, and distribute.

-----

## Links

- **Live Demo:** <https://jaibabaneemkaroli-1.github.io/universal-code-translator/>
- **GitHub:** <https://github.com/jaibabaneemkaroli-1/universal-code-translator>
- **Get Claude API Key:** <https://console.anthropic.com/>
- **Cultural Grammar Synthesis:** Same method works for music, architecture, food, and any cultural artifacts with deep structure

-----

## Philosophy

**The future of code isn’t choosing one paradigm.**

**It’s synthesizing all of them.**

This translator proves it’s possible to:

- Translate between fundamentally different paradigms
- Preserve semantic invariants across transformations
- Generate genuinely idiomatic code in any language
- Explain reasoning at every step
- Make paradigm differences concrete and learnable

What was theoretical (Cultural Grammar Synthesis) is now practical.

What was impossible (universal code translation) is now real.

What works for music and architecture **works for code.**

-----

## Credits

Built by someone who doesn’t “know fuck all about code” but understands structural invariants.

**That’s the point.**

You don’t need to be a polyglot programmer to solve polyglot programming problems.

You just need to understand:

- What must be preserved (invariants)
- How each paradigm organizes complexity (grammar)
- How to synthesize between them (method)

The rest is execution.

-----

**Try it. Your mind will be blown.** ✨

**[Launch Translator →](https://jaibabaneemkaroli-1.github.io/universal-code-translator/)**

```
---
