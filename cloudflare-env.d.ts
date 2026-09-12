declare namespace Cloudflare {
  interface Env {
    DB?: D1Database;
    BUCKET?: R2Bucket;
    RESEND_API_KEY?: string;
    NOTIFICATION_TO_EMAIL?: string;
    NOTIFICATION_FROM_EMAIL?: string;
    VISITOR_ALERT_TOKEN?: string;
  }
}
