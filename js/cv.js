(function() {
    'use strict';

    addEventListener('beforeprint', () => {
        alert(
            'Vänligen använd följande inställningar vid utskrift och pdf konvertering:\n' +
            '- A4 porträtt format\n' +
            '- Visa backgrundsbilder\n' +
            '- Ingen extra marginal'
        );
    });

}());
