const validateUser = async (
    user
): Promise<
    | { success: true; userType: string; token: string }
    | { success: false; message: string }
> => {
  try {
    const response = await fetch("/api/v1/signin", {
      mode: 'cors',
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: user.email, password: user.password }),
    });
    const data = await response.json();
    if (data.status === "success") {
      console.log("User logged in successfully");
      return { success: true, userType: data.userType, token: data.token };
    } else {
      console.error("Error logging in user");
      return { success: false, message: data.message };
    }
  } catch (error) {
    console.error(error);
  }
};
