return (
  <>
    <AuthLayout
      title="Create Account"
      subtitle="Join StorySparkAI and begin your creative journey."
    >
      <div className="w-full space-y-6">

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-700"></div>
          </div>

          <div className="relative flex justify-center text-sm">
            <span className="px-4 text-gray-400 font-semibold">
              SIGN UP WITH EMAIL
            </span>
          </div>
        </div>

        {!showOtpField ? (
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>

            <SSInput
              label="Name"
              name="name"
              placeholder="Enter your name"
              required={true}
              icon="fas fa-user"
              register={register}
              validation={{
                required: "Name is required",
                minLength: {
                  value: 8,
                  message: "Name must be at least 8 characters",
                },
                pattern: {
                  value: /^[A-Za-z0-9._]+$/,
                  message:
                    "Only letters, numbers, underscores, and dots are allowed",
                },
              }}
              error={errors.name}
            />

            <SSInput
              label="Email address"
              name="email"
              type="email"
              placeholder="Enter your email"
              required={true}
              icon="fas fa-envelope"
              register={register}
              error={errors.email}
            />

            <SSInput
              label="Password"
              name="password"
              type="password"
              placeholder="Enter your password"
              required={true}
              icon="fas fa-lock"
              register={register}
              error={errors.password}
            />

            <p className="text-xs text-gray-500 -mt-2">
              Use at least 8 characters with uppercase, lowercase,
              number, and special character.
            </p>

            <SSInput
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              required={true}
              icon="fas fa-eye"
              register={register}
              error={errors.confirmPassword}
            />

            <SSButton
              text="Sign Up"
              type="submit"
              isLoading={isBusy}
            />
          </form>
        ) : (
          <div className="space-y-4">

            <SSInput
              label="OTP"
              name="otp"
              placeholder="Enter your OTP"
              required={true}
              icon="fas fa-key"
              register={register}
            />

            <SSButton
              text="Verify OTP"
              type="button"
              onClick={handleOtpValidation}
              isLoading={isBusy}
            />

          </div>
        )}

        {!showOtpField && (
          <div className="text-center text-sm text-indigo-600">
            <a
              href="/login"
              className="block text-custom hover:underline"
            >
              Already have an account? Sign In
            </a>
          </div>
        )}

      </div>
    </AuthLayout>

    <Toaster position="top-right" reverseOrder={false} />
  </>
);