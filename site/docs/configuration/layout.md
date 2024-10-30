# Dooit Layouts

In dooit, layout tells how the columns should be placed

## How to use

For using you'd have to import `TodoWidget` and `WorkspaceWidget`
and then you can use their variables to set the columns:


> [!IMPORTANT] NOTE
> Description will take up all the space left after rendering all other columns


> [!DANGER] WARNING
> You wont be able to edit the items if their column is not present in the layout \
> i.e. all the text inputs like `description` or `due`

```py
from dooit.ui.api.widgets import TodoWidget, WorkspaceWidget

@subscribe(Startup)
def layout_setup(api: DooitAPI, _):
    api.layouts.workspace_layout = [WorkspaceWidget.description]

    api.layouts.todo_layout = [
        TodoWidget.status,
        TodoWidget.description, 
        TodoWidget.recurrence,
        TodoWidget.due,
        TodoWidget.urgency,
    ]
```

:::info NOTE
For `Workspace` the only available option is `description` \
For `Todo`, the options are `description`, `due`, `effort`, `recurrence`, `status` and `urgency`
:::

:::tip
In some cases, you might want columns like `effort` or `recurrence` are better off inside the description. \
In such scenario, you can edit the column-specific formatter to show nothing and modify the description formatter

This way you'll still be able to keep the columns hidden while still having the ability to edit things
:::
