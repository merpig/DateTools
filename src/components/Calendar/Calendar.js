import { useEffect, useRef, useState } from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import CalenderUnit from '../CalendarUnit/CalendarUnit';
import { Page, Text, View, Document, StyleSheet, Image as Img } from '@react-pdf/renderer';
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';

import "./Calendar.css"

const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#E4E4E4'
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1
    }
});

const Calendar = props => {
    const [image,setImage] = useState(undefined)

    const containerRef = useRef(0);

    useEffect(()=>{
        if(image) return;
        //console.log(document.getElementById('calendar-container'))
        //setInterval(() => {
            toPng(containerRef.current)
        .then(function (dataUrl) {
            var img = new Image();
            img.src = dataUrl;
            //console.log(dataUrl)
            setImage(<Img src={img.src} />);
        })
        .catch(function (error) {
        console.error('oops, something went wrong!', error);
        });
        //  }, 10000)
    }, [image]);
    
    return (
       [<div key={"calendar-container"} id="calendar-container">
           <div className="inner-calendar-container" ref={containerRef}>
            <div className="calendar-title-top">{"2020"}</div>
            <div className="row">
                {months.map((month,i)=>
                    <div key={month} className="col-4">
                        <CalenderUnit key={month+i} month={months.indexOf(month)} year={"2020"}/>
                    </div>
                )}
            </div>
           </div>
        </div>,
        <PDFViewer key={"pdf-viewer"}>
            <Document>
                <Page size="A4" style={styles.page}>
                    {image}
                </Page>
            </Document>
        </PDFViewer>]
    );
};
  
export default Calendar;