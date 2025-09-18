// Environment configuration
// This file loads environment variables for the portfolio

class Config {
    constructor() {
        this.emailjsPublicKey = null;
        this.emailjsServiceId = null;
        this.emailjsTemplateId = null;
        this.loaded = false;
    }

    async loadConfig() {
        try {
            const response = await fetch('./env-config.json');
            if (response.ok) {
                const config = await response.json();
                this.emailjsPublicKey = config.EMAILJS_PUBLIC_KEY;
                this.emailjsServiceId = config.EMAILJS_SERVICE_ID;
                this.emailjsTemplateId = config.EMAILJS_TEMPLATE_ID;
                this.loaded = true;
                console.log('Config loaded successfully');
            }
        } catch (error) {
            console.warn('Config file not found. Please set EmailJS credentials manually.');
        }
    }

    getEmailJSConfig() {
        return {
            publicKey: this.emailjsPublicKey,
            serviceId: this.emailjsServiceId,
            templateId: this.emailjsTemplateId
        };
    }

    isLoaded() {
        return this.loaded;
    }
}

// Create global config instance
window.portfolioConfig = new Config();
