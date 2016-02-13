<?php

define('DIR_ROOT', '../posts');

include dirname(__FILE__) . '/Parsedown.php';
include dirname(__FILE__) . '/ParsedownExtra.php';

// 获取文章列表
$list = array();


function getMeta($filename){
  // 定义一个数组存放读取的变量
  $meta = array();
  $handle = fopen($filename, "r");
  $lineCount = 0; // 定义一个lineCount，文件一行行读取时从第一个---字符开始，第二个---字符结束

  // 一行一行读取
  $main = array();
  while (!feof($handle))
  {
    $buffer  = fgets($handle, 4096);
    if(!empty($buffer)){
      if($lineCount < 2){
        $content = trim($buffer);
        if($content == '---'){
          $lineCount++;
        }else{
          $meta[] = $content;
        }
      }else{
        $main[] = $buffer;
      }
    }
  }
  fclose($handle);

  $metaArr = array();
  //循环遍历数组$text
  foreach($meta as $key => $str){
    $temp = explode(':', $str, 2);
    // print_r('<textarea style="width: 800px; height: 500px;">');
    // print_r($temp);
    // print_r('</textarea>>');
    $metaArr[$temp[0]] = trim($temp[1]);
  }

  return array(
    'main' => implode( '', $main ),
    'meta' => $metaArr
  );
}

function loadDir($dir) {
  $tmp = array();
  if(is_dir($dir)){
    // 打开目录
    $dir_handle = opendir($dir);
    while($file = readdir($dir_handle)){
      if($file != "." && $file != "..") {
        $dirFile = $dir . "/" . $file;
        $result = getMeta($dirFile);
        $ParsedownExtra = new ParsedownExtra();
        $result['main'] = $ParsedownExtra->text($result['main']);
        array_push($tmp, $result);
      }
    }
    closedir($dir_handle);
  }

  return $tmp;
}
// 开始读取目录文件
$list = loadDir(DIR_ROOT);

echo json_encode(
  array(
    'code' => 1,
    'msg' => 'message',
    'data' => $list
  )
);