<div align="center">

  <!-- Replace with your NETH logo -->
  <img src="assets/neth-logo.png" alt="NETH Logo" width="150"/>

  <h1>NETH | NETWORKED ECOLOGICAL TELEMETRY HUB</h1>

  <p><strong>🌍 Intelligent Wildlife Monitoring. Smarter Conservation.</strong></p>

  <p>
    A low-power cyber-physical system combining embedded computing,
    wildlife imaging, environmental sensing, and intelligent monitoring
    for remote ecological observation.
  </p>

  <p>
    <img src="https://img.shields.io/badge/Project-Cyber--Physical%20Systems-2563eb?style=for-the-badge" alt="Cyber Physical Systems"/>
    <img src="https://img.shields.io/badge/Domain-Wildlife%20Monitoring-16a34a?style=for-the-badge" alt="Wildlife Monitoring"/>
    <img src="https://img.shields.io/badge/Status-In%20Development-orange?style=for-the-badge" alt="Project Status"/>
  </p>

  <p>
    <img src="https://img.shields.io/badge/Embedded-Systems-334155?style=flat-square"/>
    <img src="https://img.shields.io/badge/Edge-AI-7c3aed?style=flat-square"/>
    <img src="https://img.shields.io/badge/IoT-Long--Range%20Communication-0891b2?style=flat-square"/>
    <img src="https://img.shields.io/badge/License-MIT-blue?style=flat-square"/>
  </p>

</div>

---

## 🐾 Introduction

<div align="center">
  <img src="assets/wildlife-monitoring.jpg" alt="Wildlife monitoring in a natural environment" width="80%"/>
</div>

Wildlife conservation depends on reliable information about animal activity and environmental conditions. Conventional camera traps can capture wildlife images, but collecting stored data manually and monitoring device health in remote locations can be difficult.

**NETH (Networked Ecological Telemetry Hub)** aims to address these challenges through a low-power, intelligent wildlife monitoring system that integrates motion-triggered image capture, environmental sensing, embedded processing, and local data storage.

Each monitoring node records wildlife images alongside contextual information such as timestamps, temperature, humidity, battery level, and device identity. This creates a foundation for reliable ecological data collection, with future extensions for Edge AI classification and long-range communication.

## 🎯 Project Objectives

- Develop a low-power wildlife monitoring node using motion detection and embedded computing.
- Capture and store images automatically when movement is detected.
- Associate each image with environmental measurements and device information.
- Monitor battery status and overall device health.
- Optimize energy consumption for extended operation in remote environments.
- Explore Edge AI for automated image classification.
- Investigate LoRa-based communication for remote monitoring and multi-node deployments.

## ⚙️ System Architecture

<div align="center">

  <img src="assets/neth-system-architecture.png" alt="NETH system architecture" width="90%"/>

  <p><i>Planned architecture of the NETH wildlife monitoring system.</i></p>

</div>

The proposed system consists of distributed monitoring nodes. Each node collects visual and environmental data, processes sensor readings, and stores information locally. Optional communication modules can transmit compact status reports to a gateway for remote access.

### Core workflow

1. **Motion Detection:** A PIR sensor detects movement near the camera.
2. **Image Capture:** The embedded system activates the camera and captures images.
3. **Environmental Sensing:** Temperature and humidity readings are collected.
4. **Data Synchronization:** Images are associated with timestamps, sensor readings, battery level, and node identity.
5. **Local Storage:** Images and associated data are saved for later retrieval.
6. **Device Health Monitoring:** Battery and operational status are recorded.
7. **Intelligent Analysis:** A lightweight Edge AI model may classify captured images.
8. **Remote Communication:** An optional LoRa module may transmit detection summaries and device status.

## 🔩 Proposed Hardware

| Component | Purpose |
|---|---|
| Embedded processor | Controls sensing, capture, and data handling |
| Camera module | Captures wildlife images |
| PIR motion sensor | Detects movement |
| Temperature and humidity sensor | Records environmental conditions |
| MicroSD card or equivalent storage | Stores images and sensor records |
| Battery monitoring circuit | Measures battery status |
| Rechargeable battery | Powers the monitoring node |
| Optional solar charging | Supports extended deployments |
| Optional LoRa module | Enables long-range telemetry |

*The final component selection will depend on hardware availability, power requirements, and prototype testing.*


## 🧠 Key Features

| Feature | Description |
|:---|:---|
| 📷 **Intelligent Image Capture** | Automatically captures wildlife images when motion is detected. |
| 🌡️ **Environmental Sensing** | Records temperature and humidity alongside captured images. |
| 💾 **Local Data Storage** | Stores wildlife images and associated metadata locally for reliable data collection. |
| 🕒 **Synchronized Metadata** | Links each image with its timestamp, temperature, humidity, battery level, and node ID. |
| 🔋 **Low-Power Operation** | Minimizes energy consumption during inactive periods to support extended deployment. |
| 📊 **Device Health Monitoring** | Tracks battery status and basic device operating conditions. |
| 🤖 **Edge AI Classification** | Planned AI-based classification of animals, humans, vehicles, and false triggers. |
| 📡 **Long-Range Communication** | Planned LoRa telemetry for transmitting detection summaries and sensor readings. |
| 🌐 **Multi-Node Monitoring** | Explores communication between distributed monitoring nodes and a central gateway. |
| 🧪 **Performance Evaluation** | Evaluates detection reliability, sensor accuracy, data integrity, power consumption, and optional AI and communication performance. |

## 📊 Testing and Evaluation

The prototype will be evaluated using measurable engineering criteria.

| Evaluation Area | Measurements |
|---|---|
| Camera performance | Trigger reliability, response time, and image quality |
| Sensor performance | Temperature and humidity accuracy |
| Data integrity | Correct association of images, timestamps, and sensor records |
| Power efficiency | Current consumption during sleep, sensing, capture, and processing |
| Device reliability | Operational stability and device-health reporting |
| AI performance | Classification accuracy and inference time, if implemented |
| Communication | Range, packet delivery rate, and latency, if implemented |

## 🗺️ Development Roadmap

- [ ] **Phase 1:** Research, requirements, and system architecture
- [ ] **Phase 2:** Camera and PIR sensor integration
- [ ] **Phase 3:** Local image storage and timestamping
- [ ] **Phase 4:** Environmental and battery monitoring
- [ ] **Phase 5:** Low-power optimization and device-health monitoring
- [ ] **Phase 6:** Prototype testing and performance evaluation
- [ ] **Phase 7:** Optional Edge AI image classification
- [ ] **Phase 8:** Optional LoRa communication and multi-node testing
- [ ] **Phase 9:** Final documentation and demonstration

*The roadmap may be adjusted according to testing results, available resources, and project requirements.*

## 🌱 Expected Impact

NETH aims to support more efficient wildlife observation by reducing dependence on manual data collection and providing useful information about both animal activity and monitoring-device health.

The project also provides an opportunity to study the integration of embedded systems, digital imaging, environmental sensing, power management, data processing, and wireless communication in a practical cyber-physical system.

## 🛠️ Technology Stack

The final stack will be documented as the hardware and software are selected and implemented.

- **Embedded Systems:** Processor and peripheral integration
- **Programming:** Language selected for the embedded platform
- **Image Processing:** Wildlife image handling and analysis
- **Data Management:** Local image storage and metadata
- **Edge AI:** Optional lightweight inference
- **Communication:** Optional LoRa-based telemetry
- **Testing:** Power, sensing, reliability, and performance measurements

## 📁 Repository Structure



## 📚 Research and Documentation

The `docs/` directory will contain system architecture, hardware decisions, design notes, test procedures, and project documentation.

Research papers, component datasheets, and other technical references will be added as they are reviewed and selected.

## 👥 Project Team

**Project Domain:** Cyber-Physical Systems (CO3060)

- [**M.I.M. Imaadh**](https://www.linkedin.com/in/imaadh-ifthikar-the-computer-engineer?utm_source=share_via&utm_content=profile&utm_medium=member_android) 
- [**H.D. Lokugamage**](https://www.linkedin.com/in/didulanalokugamage?utm_source=share_via&utm_content=profile&utm_medium=member_android) 
- [**K.P.B.P. Karunanayake**](https://www.linkedin.com/in/bhagya-karunanayake-b52085270?utm_source=share_via&utm_content=profile&utm_medium=member_android) 
- [**P.G.D.D. Chandrawansha**](https://www.linkedin.com/in/danirudinsara?utm_source=share_via&utm_content=profile&utm_medium=member_android) 


---

<div align="center">

  **🌿 NETH**

  *Connecting technology with the natural world.*

  <sub>Built for intelligent ecological observation and wildlife conservation.</sub>

</div>
