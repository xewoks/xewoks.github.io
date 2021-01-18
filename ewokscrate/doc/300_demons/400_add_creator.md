<div class='panel fade js-scroll-anim' data-anim='fade'>

# Adding creators

## `POST`{.verb} `/v1/demons/` `id`{.param} `/creators/`

<div class='info-yellow'>
<b>Access Restrictions:</b><br>
Access to this endpoint requires at least `ListModerator` permissions.
</div>

Adds a creator the creator list of the demon with the specified id

### Request:

| Header        | Expected Value                                             | Optional |
| ------------- | ---------------------------------------------------------- | -------- |
| Authorization | [Pointercrate access token](/documentation/#access-tokens) | false    |
| Content-Type  | `application/json`                                         | false    |

| Field   | Type   | Description                                       | Optional |
| ------- | ------ | ------------------------------------------------- | -------- |
| creator | string | The creator to add. Needs to be the player's name | false    |

### Response: `201 CREATED`

_Nothing_

### Errors:

| Status code | Error code | Description                                         |
| ----------- | ---------- | --------------------------------------------------- |
| 404         | 40401      | No demon with the specified `id`             |
| 409         | 40905      | The given player is already registered as a creator |

### Example request:

```json
POST /api/v2/demons/2/creators/
Accept: application/json
Authorization: Bearer <omitted>
Content-Type: application/json

{
    "creator": "ViPriN"
}
```

</div>
