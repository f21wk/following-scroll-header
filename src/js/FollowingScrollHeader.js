(() => {
    /**
    * Windowオブジェクト
    * @param Object
     */
    const win = window;

    /**
    * アクティブ時に追加するクラス名
    * @param string
     */
    const ADD_CLASS_NAME = 'js_active';

    /**
     * スクロールに追従する要素
     */
    let $SCROLL_TARGET_ELEMENTS = null;

    /**
    * どの位スクロールしたら、追従させるのか
    * @param number
     */
    const SCROLL_VAL = 500;

    /**
     * Styleタグを作成します。
     * CSSファイルを追加したくない場合のみ、使用してください。
     */
    const CreateStyleTag = () => {
        const st = document.createElement('style');
        st.innerText = 'header {position: static;top: -100%;}header.js_active {position: -webkit-sticky;position: sticky;top: 0;transition-duration: 1s;}';
        document.getElementsByTagName('head')[0].insertAdjacentElement('beforeend', st);
    };

    const ScrollAnimeInit = () => {
        // CSSを入れる場合、下記のCreateStyleTag()はコメントアウトする
        // CreateStyleTag();

        $SCROLL_TARGET_ELEMENTS = document.getElementById('header');
    };

    const ScrollAnime = () => {
        if ($SCROLL_TARGET_ELEMENTS === null) return;
        const sy = win.scrollY;

        const classList = $SCROLL_TARGET_ELEMENTS.classList;
        const isClass = classList.contains(ADD_CLASS_NAME);

        if (!isClass && SCROLL_VAL <= sy) classList.add(ADD_CLASS_NAME);
        else if (isClass && SCROLL_VAL >= sy) classList.remove(ADD_CLASS_NAME);
    };

    win.addEventListener('load', ScrollAnimeInit);
    win.addEventListener('scroll', ScrollAnime);
})();