# User Profile Details

Shows a user their own account details and quick actions on their profile page.

## Bootstrap reference

> [Bootstrap 5.3 — Cards](https://getbootstrap.com/docs/5.3/components/card/)

## What it does

Renders a card with the user picture beside a description list of the account
details (username, full name, email, time zone, account status, created, member for, last
login) and a row of quick action buttons. Rows with no value are left out.

It has no Canvas UI (`noUi: true`): it is data about one account. The Varbase
`varbase_user_profile_details` ECA model renders it on the user's own profile
page, and as a "User profile details" ECA block that Drupal Canvas can place.

## Files

- `user-profile-details.component.yml`: props and an example.
- `user-profile-details.twig`: the markup.

## Props overview

| Prop | Type | Default | Notes |
| --- | --- | --- | --- |
| `heading` | string | `Profile details` | Card heading. |
| `username` | string | | Account name. |
| `full_name` | string | | Full name, when the site has a field for it. |
| `email` | string | | Account email. |
| `timezone` | string | | Account time zone. |
| `status` | boolean | `true` | Active or Blocked. |
| `created` | string | | Formatted date. |
| `member_for` | string | | Time since the account was created. |
| `last_login` | string | | Formatted date, `Never` when empty. |
| `picture_url` | string | | User picture; empty shows a person icon. |
| `picture_alt` | string | username | Alternative text of the picture. |
| `actions` | array | `[]` | `{title, url, variant}`; variant is `primary`, `outline-primary` or `outline-dark`. |


## Example

```twig
{{ include('vartheme_bs5:user-profile-details', {
  username: user.name.value,
  email: user.mail.value,
  actions: [{ title: 'Edit profile'|t, url: path('entity.user.edit_form', {user: user.id}), variant: 'primary' }],
}, with_context = false) }}
```

## Notes

- Only show it to the account owner: it prints the email address and time zone.
