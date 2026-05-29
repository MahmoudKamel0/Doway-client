import type { InputPasswordProps } from "@lib/types/components";
import { EyeIcon, EyeClosedIcon } from "lucide-react";
import { useState } from "react";
import { cn } from "@lib/utils/cn.util";
import { Button } from "./button.ui";
import { Input } from "./input.ui";

export default function InputPassword({ className, ...props }: Readonly<InputPasswordProps>) {
    const [isShowPassword, setShowPassword] = useState<boolean>(false);

    return (
        <div
            className={cn(
                "border-input placeholder:text-muted-foreground focus-within:border-ring focus-within:ring-ring/50 disabled:bg-input/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 flex h-8 w-full min-w-0 items-center justify-between rounded-sm border bg-transparent py-4.5 pe-2.5 text-base transition-colors outline-none focus-within:ring-3 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-3 md:text-sm",
                className,
            )}
        >
            <Input
                type={isShowPassword ? "text" : "password"}
                className="border-none focus-visible:border-none focus-visible:ring-0"
                {...props}
            />
            <Button variant="transparent" type="button" onClick={() => setShowPassword(!isShowPassword)}>
                {isShowPassword ? <EyeIcon /> : <EyeClosedIcon />}
            </Button>
        </div>
    );
}
