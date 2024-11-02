from pathlib import Path
from dooit.api.theme import DooitThemeBase
from dooit.utils import CssManager
from tempfile import TemporaryDirectory


class TestTheme(DooitThemeBase):
    _name = "test_theme"


def test_css_manager():
    cache_path = Path(TemporaryDirectory().name)
    manager = CssManager(cache_path=cache_path)

    assert manager.css_file.exists() is False
    manager.refresh_css()

    # via classname
    manager.set_theme(TestTheme)
    assert manager.theme is TestTheme

    # reset
    manager.set_theme(DooitThemeBase)
    assert manager.theme is not TestTheme

    # via name
    manager.add_theme(TestTheme)
    manager.set_theme("test_theme")
    assert manager.theme is TestTheme


# ----------------------------------------

RANDOM_CSS = """
#random_css {
    background: red;
}
"""


def test_css_injections():
    cache_path = Path(TemporaryDirectory().name)
    manager = CssManager(cache_path=cache_path)

    injection_id = manager.inject_css(RANDOM_CSS)
    assert RANDOM_CSS in manager.read_css()

    assert manager.is_active(injection_id)

    assert manager.unject_css(injection_id)
    assert RANDOM_CSS not in manager.read_css()

    incorrect_id = "incorrect_id"
    assert not manager.unject_css(incorrect_id)
