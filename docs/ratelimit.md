## Rate limit workflow

The entire rate limit is being handled by a single local file `.config/faucetli/ratelimit.json`, which is present in the user's root directory.

The structure of data in the `ratelimit.json` would look something like this:

```json
{
  "reset": 1555555555
}
```

The `reset` key is the Unix timestamp of when the rate limit will reset. We will use the `reset` key to determine if the user has exceeded the rate limit.
