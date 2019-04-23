    //Create javascript function
    function generatePostTypeCode(e){
        e.preventDefault();
        //Get values
        var name = document.getElementsByName("title")[0].value
        var nameSingle = document.getElementsByName("titleSingle")[0].value
        var slug = document.getElementsByName("slug")[0].value
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
    'name'               => _x( '`+name+`', 'post type general name', 'your-plugin-textdomain' ),<br>
    'singular_name'      => _x( '`+nameSingle+`', 'post type singular name', 'your-plugin-textdomain' ),<br>
    'menu_name'          => _x( '`+name+`', 'admin menu', 'your-plugin-textdomain' ),<br>
    'name_admin_bar'     => _x( '`+nameSingle+`', 'add new on admin bar', 'your-plugin-textdomain' ),<br>
    'add_new'            => _x( 'Add New', '`+nameSingle.toLowerCase()+`', 'your-plugin-textdomain' ),<br>
    'add_new_item'       => __( 'Add New `+nameSingle+`', 'your-plugin-textdomain' ),<br>
    'new_item'           => __( 'New `+nameSingle+`', 'your-plugin-textdomain' ),<br>
    'edit_item'          => __( 'Edit `+nameSingle+`', 'your-plugin-textdomain' ),<br>
    'view_item'          => __( 'View `+nameSingle+`', 'your-plugin-textdomain' ),<br>
    'all_items'          => __( 'All `+name+`', 'your-plugin-textdomain' ),<br>
    'search_items'       => __( 'Search `+name+`', 'your-plugin-textdomain' ),<br>
    'parent_item_colon'  => __( 'Parent `+name+`:', 'your-plugin-textdomain' ),<br>
    'not_found'          => __( 'No `+name+` found.', 'your-plugin-textdomain' ),<br>
    'not_found_in_trash' => __( 'No `+name+` found in Trash.', 'your-plugin-textdomain' )<br>
);<br><br>

$args = array(<br>
    'labels'             => $labels,<br>
    'description'        => __( 'Description.', 'your-plugin-textdomain' ),<br>
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