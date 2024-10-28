function encryptText ()
{
    const inputText = document.getElementById( 'inputText' ).value;
    const shift = parseInt( document.getElementById( 'shift' ).value );
    document.getElementById( 'outputText' ).value = caesarCipher( inputText, shift );
}

function decryptText ()
{
    const inputText = document.getElementById( 'inputText' ).value;
    const shift = parseInt( document.getElementById( 'shift' ).value );
    document.getElementById( 'outputText' ).value = caesarCipher( inputText, -shift );
}

function caesarCipher ( text, shift )
{
    return text
        .split( '' )
        .map( char =>
        {
            if ( char.match( /[a-z]/i ) )
            {
                const code = char.charCodeAt( 0 );
                const base = code >= 65 && code <= 90 ? 65 : 97;
                return String.fromCharCode( ( ( code - base + shift ) % 26 ) + base );
            }
            return char;
        } )
        .join( '' );
}
