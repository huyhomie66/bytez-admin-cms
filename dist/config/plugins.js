module.exports = ({ env }) => ({
    documentation: {
        enabled: true,
        config: {
            openapi: "3.0.0",
            info: {
                version: "1.0.0",
                title: "DOCUMENTATION",
                description: "",
                termsOfService: "YOUR_TERMS_OF_SERVICE_URL",
                contact: {
                    name: "TEAM",
                    email: "contact-email@something.io",
                    url: "mywebsite.io",
                },
                license: {
                    name: "Apache 2.0",
                    url: "https://www.apache.org/licenses/LICENSE-2.0.html",
                },
            },
            "x-strapi-config": {
                // Leave empty to ignore plugins during generation
                plugins: ["upload", "users-permissions"],
                path: "/documentation",
            },
            servers: [
                { url: "http://localhost:1337/api", description: "Development server" },
                {
                    url: "https://gen-dev.bytez.pro/api",
                    description: "Staging server",
                },
            ],
            externalDocs: {
                description: "Find out more",
                url: "https://docs.strapi.io/developer-docs/latest/getting-started/introduction.html",
            },
            security: [{ bearerAuth: [] }],
        },
    },
    upload: {
        provider: "aws-s3",
        providerOptions: {
            s3Options: {
                accessKeyId: env("AWS_ACCESS_KEY_ID") || 'AKIAQQQQVFVH3Z3TMA6G',
                secretAccessKey: env("AWS_ACCESS_SECRET") || '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',
                region: env("AWS_REGION") || 'us-east-1',
                params: {
                    Bucket: env("AWS_BUCKET") || 'gen-cms',
                },
            }
        },
        actionOptions: {
            upload: {},
            uploadStream: {},
            delete: {},
        },
    },
    'strapi-plugin-populate-deep': {
        config: {
            defaultDepth: 5, // Default is 5
        }
    },
});
