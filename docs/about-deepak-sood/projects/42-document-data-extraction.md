# Document Data Extraction

Project of document data extraction for a university. Below are the questions that will help us understand the requirements more.

### 1. Types of Documents

- What types of documents will be included in the extraction process (e.g., marksheets, certificates, transcripts, etc.)?
- Are there different versions of marksheets or certificates (e.g., older formats, new formats)?
- Are there any handwritten documents involved, or are all documents printed?
- Are there any specific templates or layouts for marksheets across different departments or courses?

### 2. Document Formats

- What file formats are the documents available in (e.g., PDF, scanned images, DOCX, TIFF)?
- Are the documents available in scanned images (e.g., JPEG, PNG, TIFF) or as native text formats (e.g., PDFs with selectable text)?
- Are OCR (Optical Character Recognition) techniques required to extract text from scanned images?
- Will there be documents in languages other than English (e.g., regional languages or multiple languages)?
- Is there a requirement for multi-page document processing (e.g., marksheets that span more than one page)?

### 3. Data Fields & Information to Extract

- What specific data needs to be extracted from the marksheets (e.g., student name, course, marks, grade, date of issue)?
- Are there standardized fields in the marksheets, or does each document vary based on the department or course?
- Is there a requirement to capture signatures or stamps, and how should they be processed?
- Will the extracted data need to be validated against any internal databases or reference systems (e.g., student IDs, course names)?
- How will errors or discrepancies in the data be handled (e.g., manual validation, automatic alerts)?

### 4. Data Datasets & Storage

- What type of database or storage solution will be used to store the extracted data (e.g., relational database, NoSQL, cloud storage)?
- Will the extracted data need to be stored with document references or metadata (e.g., document ID, issue date)?
- What is the volume of documents expected for extraction (e.g., daily, monthly, yearly)?
- Will there be any data privacy or security requirements for storing sensitive student information?
- How long should the extracted data be retained, and are there any compliance requirements (e.g., GDPR, local data protection laws)?

### 5. Processing Requirements

- What is the expected throughput for the extraction process (e.g., how many documents should be processed per day)?
- Will the system need to handle real-time extraction, or is batch processing acceptable?
- Are there any workflow automation needs (e.g., document submission, extraction, verification, and storage)?
- Will there be integration with other university systems, such as student management systems or ERP?

### 6. Quality & Accuracy

- What level of accuracy is required for data extraction (e.g., 95%, 99%)?
- Is there a need for manual review of the extracted data, or will the process be fully automated?
- Are there any specific challenges regarding the quality of the documents (e.g., poor scans, faded text, handwritten notes)?

### 7. User Interface & Access

- Who will have access to the extracted data, and what role-based permissions will be needed?
- Will the extracted data be accessed via a web interface, desktop application, or API?
- Is there a need for any user interface to manually review or correct the extracted data?

### 8. Future Expansion

- Is there a potential for scaling the solution to handle other types of documents in the future (e.g., admission forms, research papers)?
- Are there plans to integrate this document extraction system with other systems (e.g., automated transcript generation, student portals)?

### 9. Others

- Amount of historical dataset available for training of the model
- Current process
