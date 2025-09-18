const fs = require('fs');
const path = require('path');

function loadEnvToJson() {
    const envPath = path.join(__dirname, '.env');
    const outputPath = path.join(__dirname, 'env-config.json');
    
    if (!fs.existsSync(envPath)) {
        console.error('.env file not found');
        return;
    }
    
    const envContent = fs.readFileSync(envPath, 'utf8');
    const config = {};
    
    envContent.split('\n').forEach(line => {
        line = line.trim();
        if (line && !line.startsWith('#')) {
            const [key, value] = line.split('=');
            if (key && value) {
                config[key.trim()] = value.trim();
            }
        }
    });
    
    fs.writeFileSync(outputPath, JSON.stringify(config, null, 2));
    console.log('Environment config generated successfully');
}

loadEnvToJson();
