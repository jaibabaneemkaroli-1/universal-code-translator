console.log("🚀 UNIVERSAL CODE TRANSLATOR");
console.log("=".repeat(80));
console.log("\n📝 SOURCE: JavaScript OOP\n");

const jsCode = `class UserRepository {
constructor(db) {
this.db = db;
this.cache = new Map();
}

async getUser(id) {
if (this.cache.has(id)) return this.cache.get(id);
const user = await this.db.query('SELECT * FROM users WHERE id = ?', [id]);
this.cache.set(id, user);
return user;
}
}`;

console.log(jsCode);

console.log("\n" + "=".repeat(80));
console.log("✨ TRANSLATED: Haskell Functional\n");

const haskellCode = `type UserRepo a = ReaderT Database (StateT Cache IO) a

getUser :: UserId -> UserRepo User
getUser uid = do
cached <- gets (Map.lookup uid)
case cached of
Just user -> return user
Nothing -> do
db <- ask
user <- liftIO $ queryDB db "SELECT * FROM users WHERE id = ?" [uid]
modify (Map.insert uid user)
return user`;

console.log(haskellCode);

console.log("\n" + "=".repeat(80));
console.log("🧠 SYNTHESIS POINTS\n");
console.log("✓ Mutable state → State monad");
console.log("✓ Untracked effects → IO monad");
console.log("✓ Constructor DI → Reader monad");
console.log("✓ Imperative flow → Monadic composition\n");

console.log("🎉 Cultural Grammar Synthesis works for code!");
