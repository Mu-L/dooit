<style>
h2 code {
    color: var(--vp-c-brand-1);
}
</style>

# Todo

In this page, I'll lay out all the methods available on the todo class

:::tip
As mentioned in the introduction, `Todo` class is a table and any sql operations can be performed using sqlalchemy
:::

<!-- --------------------- CLASSMETHODS ----------------------------------- -->

## `classmethod` from_id

```python
from_id(id: str | int) -> Todo
```

Returns the todo object with the given id

**Parameters:**

| Param|<div style="width: 100px">Default</div> |Description|
| ------------- | :----------------:  | :----------------------------------------------------------------------------------------|
| id            |                     | The id of the todo object you want to get                                           |

**Returns:**

| Type|<div style="width: 100px">Default</div> |Description|
| ------------- | :----------------:  | :----------------------------------------------------------------------------------------|
| Self          |                     | The todo object                                                                     |

**Raises:**

| Type|<div style="width: 100px">Default</div> |Description|
| ------------- | :----------------:  | :----------------------------------------------------------------------------------------|
| ValueError    |                     | If an invalid ID is passed                                                               |


## `classmethod` all

```python
all() -> List[Todo]
```

Returns all the todos from the database

**Returns:**

| Type|<div style="width: 100px">Default</div> |Description|
| ------------- | :----------------:  | :----------------------------------------------------------------------------------------|
| List[Todo]    |                     | List of the todos present in the database                                           |

<!-- ---------------- PROPERTIES ------------------------------------- -->


## `property` parent

```python
parent -> Workspace | Todo
```

Returns the parent of the todo object

**Returns:**

| Type|<div style="width: 100px">Default</div> |Description|
| ------------- | :----------------:  | :----------------------------------------------------------------------------------------|
| Workspace or Todo     |                     | The parent of the todo object                                                       |

## `property` nest_level

```python
nest_level -> int
```

Returns the nested level from the root

**Returns:**

| Type|<div style="width: 100px">Default</div> |Description|
| ------------- | :----------------:  | :----------------------------------------------------------------------------------------|
| int           |                     | Depth of the nesting                                                                     |


## `property` tags

```python
tags -> List[str]
```

Returns all the tags in the todo (words starting with `@`)

**Returns:**

| Type|<div style="width: 100px">Default</div> |Description|
| ------------- | :----------------:  | :----------------------------------------------------------------------------------------|
| List[str]     |                     | List of the tags                                                                         |



## `property` status

```python
status -> str
```

Returns the status of the todo (one of `completed`/`pending`/`overdue`)

**Returns:**

| Type|<div style="width: 100px">Default</div> |Description|
| ------------- | :----------------:  | :----------------------------------------------------------------------------------------|
| str           |                     | Status of the todo                                                                       |


## `property` is_completed

```python
is_completed -> bool
```

Returns if the todo is completed or not

**Returns:**

| Type|<div style="width: 100px">Default</div> |Description|
| ------------- | :----------------:  | :----------------------------------------------------------------------------------------|
| bool          |                     | If the todo is completed                                                                 |



## `property` is_pending

```python
is_pending -> bool
```

Returns if the todo is pending or not

**Returns:**

| Type|<div style="width: 100px">Default</div> |Description|
| ------------- | :----------------:  | :----------------------------------------------------------------------------------------|
| bool          |                     | If the todo is pending                                                                 |


## `property` is_overdue

```python
is_overdue -> bool
```

Returns if the todo is overdue or not

**Returns:**

| Type|<div style="width: 100px">Default</div> |Description|
| ------------- | :----------------:  | :----------------------------------------------------------------------------------------|
| bool          |                     | If the todo is overdue                                                                   |

<!-- ------------------ METHODS -------------------------------------- -->

## `method` siblings

```python
siblings() -> List[Todo]
```

Returns the siblings for the todo (including self)

**Returns:**

| Type|<div style="width: 100px">Default</div> |Description|
| ------------- | :----------------:  | :----------------------------------------------------------------------------------------|
| List[Self]    |                     | List of the siblings (including self)                                                    |


## `method` sort_siblings


```python
sort_siblings(field: str)
```

Sorts all the siblings by the given field

**Parameters:**

| Param|<div style="width: 100px">Default</div> |Description|
| ------------- | :----------------:  | :----------------------------------------------------------------------------------------|
| field         |                     | The field/column you'd want to sort the todo with                                        |

**Raises:**

| Type|<div style="width: 100px">Default</div> |Description|
| ------------- | :----------------:  | :----------------------------------------------------------------------------------------|
| AttributeError|                     | If an invalid field is passed                                                            |

## `method` add_todo

```python
add_todo() -> Todo
```

Adds a todo to the todo object

**Returns:**

| Type|<div style="width: 100px">Default</div> |Description|
| ------------- | :----------------:  | :----------------------------------------------------------------------------------------|
| Todo          |                     | The newly added todo                                                                     |


## `method` save


```python
save()
```

Saves any modifications done to the database

## `method` increase_urgency


```python
increase_urgency()
```

Increases the urgency for the todo (max `4`)

## `method` decrease_urgency


```python
decrease_urgency()
```

Decreases the urgency for the todo (min `0`)

## `method` toggle_complete


```python
toggle_complete()
```

Toggles the pending status of a todo


## `property` is_due_today

```python
is_due_today() -> bool
```

Returns if the todo is due on the same day

**Returns:**

| Type|<div style="width: 100px">Default</div> |Description|
| ------------- | :----------------:  | :----------------------------------------------------------------------------------------|
| bool          |                     | If the todo is overdue                                                                   |

