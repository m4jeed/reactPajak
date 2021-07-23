import React, { Fragment } from 'react';
import { Page, Text, Image, Font, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
Font.register({
    family: 'Oswald',
    src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
  });
  
  const styles = StyleSheet.create({
    body: {
      paddingTop: 10,
      paddingBottom: 65,
      paddingHorizontal: 100,
    },
    title: {
      fontSize: 24,
      textAlign: 'center',
      fontFamily: 'Oswald'
    },
    author: {
      fontSize: 12,
      textAlign: 'center',
      marginBottom: 40,
    },
    subtitle: {
      fontSize: 18,
      margin: 12,
      fontFamily: 'Oswald'
    },
    text: {
      margin: 12,
      fontSize: 14,
      textAlign: 'justify',
      fontFamily: 'Times-Roman'
    },
    image: {
      marginVertical: 15,
      marginHorizontal: 100,
    },
    header: {
      fontSize: 12,
      marginBottom: 20,
      textAlign: 'center',
      color: 'grey',
    },
    pageNumber: {
      position: 'absolute',
      fontSize: 12,
      bottom: 30,
      left: 0,
      right: 0,
      textAlign: 'center',
      color: 'grey',
    },
  });

export default function SspdList(props){
    return(
        <Fragment>
            <Document>
                <Page style={styles.body}>
                    <Text style={styles.header} fixed>
                        Contoh cetak PDF
                    </Text>
                    <Text style={styles.title}>Data SSPD</Text>
                    <Text style={styles.author}>Dalam Bentuk PDF</Text>
                    <Image
                        style={styles.image}
                        src="/assets/gambar/gambar.jpg"
                    />
                    <Text style={styles.subtitle}>
                        Ini contoh sspd pdf perpajakan
                    </Text>
                    <Text style={styles.text}>
                        Beragam surat yang terkait dengan Pajak Daerah memiliki beragam tujuan. 
                        Ada yang berupa surat pemberitahuan, ada pula yang berisi ketetapan, keputusan, 
                        bahkan surat teguran. Berikut macam-macam surat terkait
                        penyelenggaraan Pajak Daerah Berdasarkan Peraturan Pemerintah Nomor 55 Tahun 2016 
                        Tentang Ketentuan Umum dan Tata Cara Pemungutan Pajak Daerah.
                    </Text>
                    <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
                        `${pageNumber} / ${totalPages}`
                    )} fixed />
                </Page>
            </Document>
        </Fragment>
    )
}
