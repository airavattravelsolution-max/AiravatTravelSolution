---
layout: default
title: Contact Us - Airavat Travel Solutions
---

<main class="main-content" id="contact">
    <!-- Page Header -->
    <section class="page-header">
        <div class="container">
            <h1>Contact Us</h1>
            <p>Get in Touch with Our Team for Customized Solutions</p>
        </div>
    </section>

    <!-- Contact Content -->
    <section class="contact-section">
        <div class="container">
            <div class="contact-grid">
                <!-- Contact Info -->
                <div class="contact-info">
                    <h2>Get in Touch</h2>
                    
                    <div class="contact-item">
                        <h4>📞 Phone</h4>
                        <p><a href="tel:+919167101212">+91 9167101212</a></p>
                        <p><a href="tel:+917021312012">+91 7021312012</a></p>
                    </div>

                    <div class="contact-item">
                        <h4>📧 Email</h4>
                        <p><a href="mailto:airavattravelsolution@gmail.com">airavattravelsolution@gmail.com</a></p>
                    </div>

                    <div class="contact-item">
                        <h4>👤 Contact Person</h4>
                        <p><strong>Saurabh Shirdhankar</strong></p>
                    </div>

                    <div class="contact-item">
                        <h4>🌐 Follow Us</h4>
                        <div class="social-links">
                            <a href="https://www.instagram.com/airavat_travel_solutions?igsh=cnR3NDFrZWY1ajd4" target="_blank" class="social-link">📸 Instagram</a>
                            <a href="https://www.facebook.com/share/1BVwVW5SZ7/" target="_blank" class="social-link">👍 Facebook</a>
                            <a href="https://wa.me/919167101212" target="_blank" class="social-link">💬 WhatsApp</a>
                        </div>
                    </div>

                    <div class="contact-item">
                        <h4>💼 Services Available</h4>
                        <ul class="services-list">
                            <li>Airport Transfers</li>
                            <li>Corporate Travel</li>
                            <li>Event Transportation</li>
                            <li>Outstation Trips</li>
                            <li>Monthly Rentals</li>
                            <li>Group Tours</li>
                        </ul>
                    </div>
                </div>

                <!-- Contact Form -->
                <div class="contact-form">
                    <h2>Send us a Message</h2>
                    <form id="contactForm" class="form">
                        <div class="form-group">
                            <label for="name">Full Name *</label>
                            <input type="text" id="name" name="name" required>
                        </div>

                        <div class="form-group">
                            <label for="email">Email Address *</label>
                            <input type="email" id="email" name="email" required>
                        </div>

                        <div class="form-group">
                            <label for="phone">Phone Number *</label>
                            <input type="tel" id="phone" name="phone" required>
                        </div>

                        <div class="form-group">
                            <label for="service">Service Required *</label>
                            <select id="service" name="service" required>
                                <option value="">Select a service</option>
                                <option value="airport">Airport Transfer</option>
                                <option value="corporate">Corporate Travel</option>
                                <option value="outstation">Outstation Trip</option>
                                <option value="event">Event Transport</option>
                                <option value="monthly">Monthly Rental</option>
                                <option value="bus">Bus Rental</option>
                                <option value="tour">Tour Package</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label for="message">Message *</label>
                            <textarea id="message" name="message" rows="5" required></textarea>
                        </div>

                        <button type="submit" class="btn btn-primary">Send Message</button>
                    </form>
                </div>
            </div>

            <!-- Contact Highlights -->
            <div class="contact-highlights">
                <h2>Why Contact Airavat?</h2>
                <div class="highlights-grid">
                    <div class="highlight">
                        <span class="highlight-icon">⚡</span>
                        <h4>Quick Response</h4>
                        <p>24/7 availability with instant replies to your queries</p>
                    </div>
                    <div class="highlight">
                        <span class="highlight-icon">💡</span>
                        <h4>Custom Solutions</h4>
                        <p>Tailored packages matching your specific requirements</p>
                    </div>
                    <div class="highlight">
                        <span class="highlight-icon">✅</span>
                        <h4>Guaranteed Service</h4>
                        <p>Quality assurance and satisfaction guarantee on every booking</p>
                    </div>
                    <div class="highlight">
                        <span class="highlight-icon">🎁</span>
                        <h4>Special Offers</h4>
                        <p>Corporate discounts and seasonal packages available</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>

<script>
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const service = formData.get('service');
    const message = formData.get('message');
    
    // Create WhatsApp message
    const whatsappMessage = `Hello! I am interested in your services.%0A%0AName: ${name}%0AEmail: ${email}%0APhone: ${phone}%0AService: ${service}%0AMessage: ${message}`;
    window.open(`https://wa.me/919167101212?text=${whatsappMessage}`, '_blank');
    
    // Reset form
    this.reset();
    alert('Thank you for reaching out! Your message has been sent to WhatsApp. We will contact you shortly.');
});
</script>