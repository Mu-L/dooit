class DooitError(Exception):
    """
    Base class for all exceptions raised by the API.
    """


class NoParentError(DooitError):
    """
    Raised when user tries to add a Todo object without a parent
    """


class MultipleParentError(DooitError):
    """
    Raised when user tries to add a Todo object with both a workspace and a todo parent
    """


class SiblingAdditionError(DooitError):
    """
    Raised when user tries to add a sibling to a non-parented node (i.e Manager Object)
    """


class WorkspaceAdditionError(DooitError):
    """
    Raised when user tries to add a workspace to a todo object
    """


class TodoAdditionError(DooitError):
    """
    Raised when user tries to add a todo to manager class
    """
