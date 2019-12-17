<?php
/**
 * Custom warning handler
 *
 * @param integer $code
 * @param string $description
 * @param string $file
 * @param interger $line
 * @return boolean
 */
function _melisHandleWarning($code, $description, $file = null, $line = null)
{
    if (error_reporting() === 0) {
        return false;
    }

    $data = array(
        'code' => $code,
        'description' => $description,
        'file' => $file,
        'line' => $line,
    );

    $_SESSION['melis_php_warnings'][] = $data;

    return true;
}

//calling custom warning handler
set_error_handler("_melisHandleWarning", E_WARNING);