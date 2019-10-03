function alpha()
{
   if( !(numF%7) )
   {
    document.getElementsByTagName("input")[2].click();
   }
   else
   {
    document.getElementsByTagName("input")[3].click();
   }
}

setInterval(alpha, 1000);
