    //Create javascript function
    function generatePostTypeCode(e){
        e.preventDefault();
        //Get values
        var name = document.getElementsByName("title")[0].value
        var nameSingle = document.getElementsByName("titleSingle")[0].value
        var textDomain = document.getElementsByName("textDomain")[0].value
        var slug = document.getElementsByName("slug")[0].value
        var archives = document.getElementsByName("archives")[0].value

        console.log(archives);

        var generatedCodeDiv = document.getElementById('generatedCode');
        
        //Run generation
        var plainCode = `add_action( 'init', 'codex_book_init' );<br>
/**<br>
* Register a book post type.<br>
*<br>
* @link http://codex.wordpress.org/Function_Reference/register_post_type <br>
*/<br>
function codex_book_init() { <br>
$labels = array( <br>
    'name'               => _x( '`+name+`', 'post type general name', '`+textDomain+`' ),<br>
    'singular_name'      => _x( '`+nameSingle+`', 'post type singular name', '`+textDomain+`' ),<br>
    'menu_name'          => _x( '`+name+`', 'admin menu', '`+textDomain+`' ),<br>
    'name_admin_bar'     => _x( '`+nameSingle+`', 'add new on admin bar', '`+textDomain+`' ),<br>
    'add_new'            => _x( 'Add New', '`+nameSingle.toLowerCase()+`', '`+textDomain+`' ),<br>
    'add_new_item'       => __( 'Add New `+nameSingle+`', '`+textDomain+`' ),<br>
    'new_item'           => __( 'New `+nameSingle+`', '`+textDomain+`' ),<br>
    'edit_item'          => __( 'Edit `+nameSingle+`', '`+textDomain+`' ),<br>
    'view_item'          => __( 'View `+nameSingle+`', '`+textDomain+`' ),<br>
    'all_items'          => __( 'All `+name+`', '`+textDomain+`' ),<br>
    'search_items'       => __( 'Search `+name+`', '`+textDomain+`' ),<br>
    'parent_item_colon'  => __( 'Parent `+name+`:', '`+textDomain+`' ),<br>
    'not_found'          => __( 'No `+name+` found.', '`+textDomain+`' ),<br>
    'not_found_in_trash' => __( 'No `+name+` found in Trash.', '`+textDomain+`' )<br>
);<br><br>

$args = array(<br>
    'labels'             => $labels,<br>
    'description'        => __( 'Description.', '`+textDomain+`' ),<br>
    'public'             => true,<br>
    'publicly_queryable' => true,<br>
    'show_ui'            => true,<br>
    'show_in_menu'       => true,<br>
    'query_var'          => true,<br>
    'rewrite'            => array( 'slug' => '`+slug+`' ),<br>
    'capability_type'    => 'post',<br>
    'has_archive'        => true,<br>
    'hierarchical'       => false,<br>
    'menu_position'      => null,<br>
    'supports'           => array( 'title', 'editor', 'author', 'thumbnail', 'excerpt', 'comments' )<br>
);<br><br>

register_post_type( 'book', $args );<br>
}`;
plainCode = '<code>'+plainCode+'</code>'
generatedCodeDiv.innerHTML = plainCode;

    }

    function copyCode() {
            //Select code content
            var copyText = document.querySelector("code").textContent;
            // Create temp textarea for copy code
            const el = document.createElement('textarea');
            //Select code
            el.value = copyText;
            //Temp add to body
            document.body.appendChild(el);
            //Now select the code
            el.select();
            //Copy it to system clipboard
            document.execCommand('copy');
            //Remove temp el in body
            document.body.removeChild(el);
            //Alert user about success copy
            alert("Copied to clipboard!");
    }

    