import { Box, Container, Stack, Text, Title } from "@mantine/core";
import { motion } from "framer-motion";

export const sectionVariant = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0 },
};

export function Section({ id, title, description, children }: { id: string; title: string; description?: string; children?: React.ReactNode; }) {
    return (
        <Box id={id} component="section" py="xl">
            <Container size="lg">
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8 }}
                    variants={sectionVariant}
                >
                    <Stack gap="sm">
                        <Title order={2}>{title}</Title>
                        {description && <Text c="dimmed">{description}</Text>}
                        {children}
                    </Stack>
                </motion.div>
            </Container>
        </Box>
    );
}