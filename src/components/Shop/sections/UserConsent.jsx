// src/utils/UserConsent.jsx

/**
 * Утилиты для работы с согласиями на обработку персональных данных
 * В соответствии с 152-ФЗ "О персональных данных"
 */

// Сохранение согласия пользователя
export const saveUserConsent = (userData) => {
  const consentData = {
    id: Date.now(), // Уникальный идентификатор
    email: userData.email || "",
    name: userData.name || "",
    phone: userData.phone || "",
    consent: true,
    date: new Date().toISOString(),
    ip: null, // Можно добавить получение IP через API
    userAgent: navigator.userAgent,
    consentType: "checkout", // 'checkout' | 'newsletter' | 'registration'
  };

  // Получаем существующие согласия
  const consents = JSON.parse(localStorage.getItem("userConsents") || "[]");

  // Добавляем новое согласие
  consents.push(consentData);

  // Сохраняем обратно
  localStorage.setItem("userConsents", JSON.stringify(consents));

  return consentData;
};

// Получение всех согласий пользователя
export const getUserConsents = () => {
  return JSON.parse(localStorage.getItem("userConsents") || "[]");
};

// Получение последнего согласия пользователя
export const getLastUserConsent = () => {
  const consents = getUserConsents();
  if (consents.length === 0) return null;
  return consents[consents.length - 1];
};

// Проверка, давал ли пользователь согласие
export const hasUserConsent = (email) => {
  const consents = getUserConsents();
  if (!email) return consents.length > 0;
  return consents.some((consent) => consent.email === email);
};

// Удаление согласия пользователя (отзыв)
export const revokeUserConsent = (email) => {
  const consents = getUserConsents();
  const updatedConsents = consents.filter((consent) => consent.email !== email);
  localStorage.setItem("userConsents", JSON.stringify(updatedConsents));
  return updatedConsents;
};

// Получение статистики по согласиям
export const getConsentStats = () => {
  const consents = getUserConsents();
  const total = consents.length;

  // Считаем по типам
  const byType = {};
  consents.forEach((consent) => {
    const type = consent.consentType || "unknown";
    byType[type] = (byType[type] || 0) + 1;
  });

  // Считаем по месяцам
  const byMonth = {};
  consents.forEach((consent) => {
    const month = consent.date.substring(0, 7); // YYYY-MM
    byMonth[month] = (byMonth[month] || 0) + 1;
  });

  return {
    total,
    byType,
    byMonth,
    lastConsent: consents[consents.length - 1] || null,
  };
};

// Экспорт по умолчанию
export default {
  saveUserConsent,
  getUserConsents,
  getLastUserConsent,
  hasUserConsent,
  revokeUserConsent,
  getConsentStats,
};
