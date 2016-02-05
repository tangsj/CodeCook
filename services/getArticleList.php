<?php

define('DIR_ROOT', '../posts');

include dirname(__FILE__) . '/parsedown/Parsedown.php';

// 获取文章列表
$list = array();

function loadDir($dir) {
  $tmp = array();
  if(is_dir($dir)){
    // 打开目录
    $dir_handle = opendir($dir);
    while($file = readdir($dir_handle)){
      if($file != "." && $file != "..") {
        $dirFile = $dir . "/" . $file;
        $text = file_get_contents($dirFile);
        $Parsedown = new Parsedown();
        $html = $Parsedown->text($text);
        array_push($tmp, $html);
      }
    }
    closedir($dir_handle);
  }

  return $tmp;
}

$list = loadDir(DIR_ROOT);

echo json_encode(
  array(
    'code' => 1,
    'msg' => 'message',
    'data' => $list
  )
);