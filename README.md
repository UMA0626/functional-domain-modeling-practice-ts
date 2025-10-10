```
npm install
npm run dev
```

```
open http://localhost:3000
```

```
curl \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"username":"testuser","password":"secret"}' \
  localhost:3000/placeorder

curl localhost:3000/health
```
