import React, { useState } from 'react';
import Menu from './Menu';
import Footer from './Footer';

const Diagnosis = () => {
    const [previewSrc, setPreviewSrc] = useState('');

    const previewImage = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setPreviewSrc(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="sub_page">
            <div className="hero_area">
                <Menu />
            </div>

            <section className="contact_section" style={{ paddingTop: '60px' }}>
                <div className="container">
                    <div className="row d-flex justify-content-center">

                        <div className="col-md-6">
                            <h3>Upload Image</h3>

                            <div className="form_container contact-form">
                                <form action="diagnose" method="POST" encType="multipart/form-data">

                                    <input
                                        type="file"
                                        name="image_file"
                                        id="imagefile"
                                        accept="image/*"
                                        onChange={previewImage}
                                        required
                                        style={{ padding: '10px', border: '1px solid #aaaaaa', borderRadius: '4px' }}
                                    />

                                    <button type="submit">Upload Image</button>

                                    <div className="row d-flex justify-content-center" style={{ marginTop: '20px' }}>
                                        {previewSrc && (
                                            <img
                                                id="preview"
                                                style={{ width: '300px', border: '1px solid #aaaaaa', padding: '2px' }}
                                                src={previewSrc}
                                                alt="Preview"
                                            />
                                        )}
                                    </div>

                                </form>
                            </div>

                            <h3>Dermatology Image only (how to take it with mobile phone)</h3>

                            <p className="fs-1 font-weight-bold">Prepare the Skin:</p>
                            <p className="text-justify">
                                Clean gently, avoid makeup/lotions, and wait 30 minutes after washing.
                            </p>

                            <p className="fs-1 font-weight-bold">Lighting :</p>
                            <p className="text-justify">
                                Use natural daylight or a ring light; avoid flash and harsh indoor lighting.
                            </p>

                            <p className="fs-1 font-weight-bold">Camera Settings :</p>
                            <p className="text-justify">
                                Set to the highest resolution, enable macro mode, and disable beauty filters.
                            </p>

                            <p className="fs-1 font-weight-bold">Positioning & Focus:</p>
                            <p className="text-justify">
                                Keep the camera parallel, steady, and focus on the skin without digital zoom.
                            </p>

                            <p className="fs-1 font-weight-bold">Angle & Distance :</p>
                            <p className="text-justify">
                                Take multiple angles (front, side, top) from 10–15 cm away.
                            </p>

                            <p className="fs-1 font-weight-bold">Skin Preparation:</p>
                            <p className="text-justify">
                                Clean the skin gently before capturing.
                                Remove makeup, lotions, or creams that might affect visibility.
                            </p>

                            <p className="fs-1 font-weight-bold">Background:</p>
                            <p className="text-justify">
                                Use a plain background (white or neutral color) to enhance contrast.
                                Avoid busy backgrounds that distract from the skin lesion.
                            </p>

                            <p className="fs-1 font-weight-bold">Consistency for Monitoring:</p>
                            <p className="text-justify">
                                If tracking a condition over time, take pictures under the same lighting conditions and from the
                                same angle.
                            </p>

                            <p className="fs-1 font-weight-bold">Storage & Processing:</p>
                            <p className="text-justify">
                                Save as JPEG/PNG; use RAW for analysis.
                            </p>
                        </div>

                        <div className="col-md-6">
                            <h3>Diagnosis</h3>

                            <p className="text-justify">
                                A patient diagnosis involves a healthcare professional gathering information about a patient's
                                symptoms, medical history, performing a physical examination, and potentially ordering additional
                                diagnostic tests like blood work or imaging to identify the underlying cause of their health issue,
                                ultimately reaching a conclusion about their condition, known as the diagnosis; this process includes
                                taking a detailed medical history, conducting a physical exam, interpreting test results, and
                                considering potential differential diagnoses to arrive at the most likely explanation for the
                                patient's symptoms.
                            </p>

                            <p className="fs-1 font-weight-bold">Key steps in patient diagnosis:</p>
                            <p className="fs-1 font-weight-bold">Taking a medical history:</p>
                            <p className="text-justify">
                                Asking the patient about their current symptoms, past medical conditions, family history, lifestyle
                                habits, and medications they take.
                            </p>

                            <p className="fs-1 font-weight-bold">Physical examination:</p>
                            <p className="text-justify">
                                Performing a hands-on assessment by checking vital signs, listening to the heart and lungs, palpating
                                the abdomen, and examining relevant body areas based on the patient's concerns.
                            </p>

                            <p className="fs-1 font-weight-bold">Differential diagnosis:</p>
                            <p className="text-justify">
                                Considering multiple possible explanations for the patient's symptoms based on their presentation and
                                medical history.
                            </p>

                            <p className="fs-1 font-weight-bold">Ordering diagnostic tests:</p>
                            <p className="text-justify">
                                Depending on the suspected condition, the doctor may order blood tests, urine tests, imaging studies
                                (like X-rays, CT scans, MRIs), biopsies, or other specialized tests to confirm the diagnosis.
                            </p>

                            <p className="fs-1 font-weight-bold">Interpreting test results:</p>
                            <p className="text-justify">
                                Analyzing the data from the diagnostic tests to support or refute the initial working diagnosis.
                            </p>

                            <p className="fs-1 font-weight-bold">Reaching a final diagnosis:</p>
                            <p className="text-justify">
                                Based on the collected information, the healthcare provider will determine the most likely diagnosis
                                for the patient's condition.
                            </p>

                            <p className="fs-1 font-weight-bold">Important points to remember about patient diagnosis:</p>
                            <p className="fs-1 font-weight-bold">Communication is key:</p>
                            <p className="text-justify">
                                Open communication between the patient and healthcare provider is crucial to gather accurate
                                information and explain the diagnosis clearly.
                            </p>

                            <p className="fs-1 font-weight-bold">Continuous process:</p>
                            <p className="text-justify">
                                Diagnosis can be an iterative process, where new information may lead to adjustments in the working
                                diagnosis as more data becomes available.
                            </p>

                            <p className="fs-1 font-weight-bold">Clinical expertise:</p>
                            <p className="text-justify">
                                A doctor's experience and knowledge play a significant role in interpreting symptoms and test results to
                                reach an accurate diagnosis.
                            </p>
                        </div>

                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Diagnosis;


