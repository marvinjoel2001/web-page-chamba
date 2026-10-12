# Registro rápido de trabajadores

El modo Trabajador y `/es/unete` muestran el mismo formulario: nombre, correo,
WhatsApp y contraseña. No se solicitan oficios, ciudad ni documentos al crear
la cuenta. Las capturas de la app se muestran solamente en el modo Cliente.

El formulario llama a `POST /api/auth/register` con `type: worker` y
`source: web`. El backend crea la cuenta y sus credenciales, y guarda el
contacto en la bandeja existente de trabajadores interesados dentro de una
misma transacción. Ciudad y oficio figuran como `Por completar` hasta que el
equipo continúe el proceso. Si ya existe el correo o teléfono, el formulario
invita a iniciar sesión y conserva los datos para corregirlos.

La cuenta comienza sin verificar y sin disponibilidad. Puede iniciar sesión
con correo o teléfono y contraseña. La app permite entrar y explorar sin
completar oficios ni habilitar todos los permisos inicialmente. Un aviso
`Verificación pendiente` muestra los pasos para completar oficios, modalidades
y verificación de identidad. Ponerse disponible y enviar/reactivar ofertas
requiere verificación tanto en la app como en el backend.

## Configuración y publicación

Configurar `NEXT_PUBLIC_API_URL` con la URL pública del backend **antes de
compilar la web**. Puede incluir `/api`; el formulario evita duplicarlo. En
producción no se usa localhost como reemplazo de una configuración faltante.

Publicar primero el backend actualizado, luego la web y la app. Las versiones
anteriores de la app todavía pueden exigir completar los oficios al entrar.
El mensaje de contacto requiere que el equipo gestione la bandeja existente;
no se envían mensajes automáticos de WhatsApp.

## Comprobaciones

- Compilación de Next.js y TypeScript correcta.
- Pruebas de backend: registro con contraseña cifrada, acceso sin verificación,
  datos esenciales, duplicados, persistencia del contacto y restricciones.
- Revisión en navegador a 390 × 844 y en escritorio: campos, contraseña visible,
  error de duplicado y éxito usando una API local simulada sin persistencia.
- Analizador Dart y pruebas de sesión con el SDK de Flutter del proyecto.

Los cambios están preparados localmente; esta tarea no publica ni crea cuentas
en una base de datos real.
