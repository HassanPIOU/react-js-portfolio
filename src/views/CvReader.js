import React from 'react';
import PDFViewer from 'pdf-viewer-reactjs'



const CvReader = () => {
    return (
        <div>
            <PDFViewer
                document={{
                    url: "",
                }}
            />
        </div>
    )
}

export default CvReader