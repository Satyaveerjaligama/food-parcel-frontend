export const USER_TYPES = {
    customer: "customer",
    deliveryAgent: "deliveryAgent",
    hotel: "hotel"
};

export type UserType = typeof USER_TYPES[keyof typeof USER_TYPES];