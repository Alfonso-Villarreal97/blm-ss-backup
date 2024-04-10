
<?php
/*https://github.com/PHPMailer/PHPMailer */

?>




<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require "PHPMailer/src/Exception.php";
require "PHPMailer/src/PHPMailer.php";
require "PHPMailer/src/SMTP.php";
include("configuu.php");
$con=mysqli_connect('70.38.39.86','desarrolloweb','1P0nlin323-1','iponline_webpage'); /*Conexion a la base de datos */
/*
//Este codigo es solo para verificar si la conexion fue exitosa o no
	if($con)
	{
		echo 'Se logro';
	}
	else{
		echo 'no se logro';
	}

	
	soporte3@iponline.com.mx
*/




$nombre=$_POST['name']; /*Campo nombre del formulario */
$from = $_POST['email'];/*Campo email del formulario */

$mensaje = $_POST['message']; /* */
$telefono= $_POST['tel'];




$contenido="DATOS DEL CLIENTE \n <br>";
$contenido.="Nombre: $nombre  \n<br>";
$contenido.="Correo: $from \n <br>";
$contenido.="Numero: $telefono \n <br>";
$contenido.="Nos comenta: $mensaje \n <br><br><br>";
$contenido.="DATOS DEL PRODUCTO SOLICITADO \n <br>";

if($que=='impresora'){
$asunto="Cotizacion de Impresora $marcaim";
$contenido.="Impresora \n <br>";
$contenido.="Marca: $marcaim \n <br>";
$contenido.="Modelo: $modeloim \n <br>";
$contenido.="PP: $ppmim \n <br>";
$contenido.="Doble cara: $doblecaraim \n <br>";
$contenido.="Oficio: $OFICIONim \n <br>";
$contenido.="Color: $colorimp \n <br>";
$contenido.="Wifi: $WIFIim \n <br>";
$contenido.="USB: $USBim \n <br>";
$contenido.="Pantalla: $PANTALLAim \n <br>";
$contenido.="Renta: $RENTAim \n <br>";
}


if($que=='laptop'){
    $asunto="Cotizacion de Laptop $marlaps";
    $contenido.="Laptop \n <br>";
    $contenido.="DISCO DURO: $disdlap \n <br>";
    $contenido.="MARCA: $marlap \n <br>";
    $contenido.="MODELO: $modlap \n <br>";
    $contenido.="COSTO DE FABRICA: $coslap \n <br>";
    $contenido.="PROCESADOR: $prolap \n <br>";
    $contenido.="MEMORIA RAM: $memlap \n <br>";
    $contenido.="SO: $solap \n <br>";
    $contenido.="PULGADAS_DISPLAY: $pullap \n <br>";
    $contenido.="GAMA: $gamlap \n <br>";
    
    }


    if($que=='desktop'){
        $asunto="Cotizacion de Desktop $maddes";
        $contenido.="Desktop \n <br>";
        $contenido.="DISCO DURO: $disdes \n <br>";
        $contenido.="MARCA: $maddes \n <br>";
        $contenido.="MODELO: $moddes \n <br>";
        $contenido.="COSTO DE FABRICA: $cosdes \n <br>";
        $contenido.="PROCESADOR: $procdes \n <br>";
        $contenido.="MEMORIA RAM: $merdes \n <br>";
        $contenido.="SO: $sodes \n <br>";
        $contenido.="GAMA: $gamlap \n <br>";
        }


        if($que=='monitores'){
            $asunto="Cotizacion de Monitor $marmon";
            $contenido.="Monitor \n <br>";
            $contenido.="Marca: $marmon \n <br>";
            $contenido.="Modelo: $momon \n <br>";
            $contenido.="Resolucuin: Full HD \n <br>";
            $contenido.="Gama: $gammon \n <br>";

            }

            if($que=='camara'){
                $asunto="Cotizacion de Camara $marCAM";
                $contenido.="Camara \n <br>";
                $contenido.="Linea: $linCAM \n <br>";
                $contenido.="Marca: $marCAM \n <br>";
                $contenido.="Modelo: $modCAM \n <br>";
                $contenido.="Descripcion: $desCAM \n <br>";
                $contenido.="Proveedor: $proCAM \n <br>";
                $contenido.="Precio unitario: $preCAM \n <br>";
                }

$header="From: contacto@iponline.com.mx";

$mail = new PHPMailer(true);
try {
    //Server settings
    $mail->SMTPDebug  = 0 ;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'mail.iponline.com.mx';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = $arraytodo['correo'];                     //SMTP username
    $mail->Password   = $arraytodo['cons'];                               //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
    $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom($arraytodo['correo'], 'Cotizacion');
    $mail->addAddress($arraytodo['correo'], 'Cotizaciones');     //Add a recipient
    
    //Name is optional
    //$mail->addReplyTo('info@example.com', 'Information');
    //$mail->addCC('cc@example.com');
    //$mail->addBCC('bcc@example.com');


    // Content
    $mail->isHTML(true); // Set email format to HTML
    $mail->Subject = $asunto;
    $mail->Body = $contenido;

    $mail->send();

    // Alerta después de enviar el correo exitosamente
    echo '<script type="text/javascript">alert("¡Correo enviado correctamente!");</script>';

} catch (Exception $e) {
    echo "Incorrecto: {$mail->ErrorInfo}";
}

    // Redirección después de mostrar la alerta
    header("Location: Catálogo copy.php");
    exit;

    ?>