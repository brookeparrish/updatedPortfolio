import React from 'react';
import Image from 'react-bootstrap/Image';
import './BootcampCertificate.css';

function BootcampCertificate() {
    return (
        <div className="text-center pb-2 pt-2">
            <Image src="badge.png" alt="University of Arizona Badge" />
        </div>
    );
}

export default BootcampCertificate;