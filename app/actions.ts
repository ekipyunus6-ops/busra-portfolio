"use server";

export type InquiryState = {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors?: Partial<
    Record<
      "name" | "email" | "subject" | "projectType" | "message" | "consent",
      string
    >
  >;
};

export const initialInquiryState: InquiryState = {
  status: "idle",
  message: ""
};

function sanitizeValue(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim() : "";
}

export async function submitInquiryAction(
  _previousState: InquiryState,
  formData: FormData
): Promise<InquiryState> {
  const name = sanitizeValue(formData.get("name"));
  const email = sanitizeValue(formData.get("email"));
  const subject = sanitizeValue(formData.get("subject"));
  const projectType = sanitizeValue(formData.get("projectType"));
  const budget = sanitizeValue(formData.get("budget"));
  const message = sanitizeValue(formData.get("message"));
  const consent = sanitizeValue(formData.get("consent"));
  const website = sanitizeValue(formData.get("website"));

  if (website) {
    return {
      status: "success",
      message: "Mesaj alındı. Uygun görünürse kısa süre içinde dönüş yapacağım."
    };
  }

  const fieldErrors: InquiryState["fieldErrors"] = {};

  if (!name) fieldErrors.name = "İsminizi paylaşın.";
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    fieldErrors.email = "Geçerli bir e-posta girin.";
  }
  if (!subject) fieldErrors.subject = "Kısa bir konu başlığı yazın.";
  if (!projectType) fieldErrors.projectType = "Proje tipini seçin.";
  if (message.length < 20) {
    fieldErrors.message = "Kısa bir proje özeti yazın.";
  }
  if (!consent) {
    fieldErrors.consent = "Gönderim onayını işaretleyin.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Formda birkaç alanı netleştirmek gerekiyor.",
      fieldErrors
    };
  }

  console.info("New inquiry received", {
    submittedAt: new Date().toISOString(),
    name,
    email,
    subject,
    projectType,
    budget,
    message,
    consent
  });

  return {
    status: "success",
    message:
      "Mesaj alındı. Uygun görünürse 48 saat içinde kapsam ve takvim içeren bir yanıt paylaşacağım."
  };
}
